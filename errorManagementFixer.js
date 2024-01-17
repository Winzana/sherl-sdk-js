const fs = require('fs');
const { prompt } = require('readline-sync');

const { glob } = require('glob');

function handleError(err, message) {
  console.error(message, err);
}

function extractSwitchStatement(data) {
  const switchRegex = /switch\s*\([^{}]*\)\s*{([^{}]*)}/;
  return data.match(switchRegex);
}

function removeCasesFromSwitch(switchMatch) {
  return switchMatch[1]
    .replace(/case\s*(200|201)\b:\s*return\s+response\.data;/, '')
    .trim();
}

function extractErrorCode(errorCases) {
  const regex = /default:\n\s+throw\s+errorFactory\.create\((.+?)\);/;
  const match = regex.exec(errorCases);
  return match ? match[1] : '';
}

function updateCatchSwitchCases(errorCases, errorCode) {
  return errorCases
    .replace(
      /default:\n\s+throw\s+errorFactory\.create\((\w+)\.(.+)\);/,
      'default:\n\t\t\t\tthrow getSherlError(\n\t\t\t\terror,\n\t\t\t\terrorFactory.create(' +
        errorCode +
        '),\n\t\t\t);',
    )
    .trim();
}

function updateCode(data, switchMatch) {
  let updatedCode = data.replace(
    /switch\s*\([^{}]*\)\s*{([^{}]*)}/,
    'return response.data;',
  );
  let errorCases = removeCasesFromSwitch(switchMatch);
  let errorCode = extractErrorCode(errorCases);
  let catchSwitchCases = updateCatchSwitchCases(errorCases, errorCode);

  const catchRegex =
    /\} catch \((error|err)\) {\s*throw getSherlError\([^{}]+\);/;
  if (catchRegex.test(updatedCode)) {
    updatedCode = updatedCode.replace(
      catchRegex,
      `} catch (error: SherlError | Error | any) {\n\t\tswitch (error.status) {\n${catchSwitchCases}\n\t}`,
    );
  } else {
    console.log('Catch block not found or already modified.');
  }
  return updatedCode;
}

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      handleError(err, 'Error reading file:');
      return;
    }

    const importStatement = "import { SherlError } from '../../common';\n";
    let newData;
    if (!data.startsWith(importStatement)) {
      newData = importStatement + data;
    } else {
      newData = data;
    }

    const switchMatch = extractSwitchStatement(newData);
    if (switchMatch) {
      let updatedCode = updateCode(newData, switchMatch);

      fs.writeFile(filePath, updatedCode, 'utf8', (err) => {
        if (err) {
          handleError(err, 'Error writing file:');
          return;
        }
        console.log('File updated successfully.');
      });
    } else {
      console.log('Switch statement not found in the code.');
    }
  });
}

const options = {
  cwd: __dirname,
  ignore: 'node_modules/**',
};

async function getFilesAndProcess() {
  console.log('Veuillez choisir un nom de domaine à modifier :');
  const domain = await prompt();
  const files = await glob(
    `src/${domain}/actions/*action.ts`,
    options,
    (err, files) => {
      if (err) {
        handleError(err, 'Error finding files:');
        return;
      }

      if (files.length === 0) {
        console.log('No action.ts files found.');
        return;
      }
    },
  );
  files.forEach((filePath) => {
    console.log(`Processing file: ${filePath}`);
    processFile(filePath);
  });
}

getFilesAndProcess();
