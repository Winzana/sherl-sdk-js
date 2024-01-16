const fs = require('fs');
const filePath =
  'src/shop/actions/advertisement/update-advertisement.action-copy.ts';

// Read the content of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Regex pour extraire le switch statement
  const switchRegex = /switch\s*\([^{}]*\)\s*{([^{}]*)}/;
  const switchMatch = data.match(switchRegex);

  if (switchMatch) {
    // Enlever les cas 200 et 201 du switch
    let errorCases = switchMatch[1]
      .replace(/case\s*(200|201)\b:\s*return\s+response\.data;/, '')
      .trim();

    let catchSwitchCases = errorCases
      .replace(
        /default:\n\s+throw\s+errorFactory\.create\((\w+)\.(.+)\);/,
        'default:\nthrow getSherlError(\n\terror,\n\terrorFactory.create(AdvertisementErr.CREATION_FAILED),\n\t);',
      )
      .trim();

    const regex = /default:\n\s+throw\s+errorFactory\.create\((.+?)\);/;

    console.log(catchSwitchCases);
    const match = regex.exec(catchSwitchCases);

    console.log(match);

    if (match) {
      const errorCode = match[1];
      console.log(errorCode); // Affiche "AdvertisementErr.CREATION_FAILED"
    }

    // Supprimer le switch statement du bloc try
    let updatedCode = data.replace(switchRegex, 'return response.data;');

    // Insérer les cas d'erreur dans le bloc catch
    const catchRegex =
      /\} catch \((error)\) {\s*throw getSherlError\([^{}]+\);/;
    if (catchRegex.test(updatedCode)) {
      updatedCode = updatedCode.replace(
        catchRegex,
        `} catch (error: Error | any) {\n\t\tswitch (error.status) {\n${catchSwitchCases}\n\t}`,
      );
    } else {
      console.log('Catch block not found or already modified.');
    }

    // Write the updated code back to the file
    fs.writeFile(filePath, updatedCode, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File updated successfully.');
    });
  } else {
    console.log('Switch statement not found in the code.');
  }
});
