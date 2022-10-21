class StringUtils {
  public static bindContext(text: string, context: { [key: string]: any }) {
    let result = text;
    Object.keys(context).forEach((key) => {
      result = result.replace(`:${key}`, context[key]);
    });
    return result;
  }
}

export { StringUtils };
