export function cathToError(error: Error | string, customMessage: string) {
  let errorMessage: string;

  if (error instanceof Error) {
    let stack: string;
    if (error.stack) {
      stack = error.stack;
    } else {
      stack = '';
    }
    errorMessage = `${error.name}::${error.message}::${stack}::${customMessage}`;
  } else {
    errorMessage = `${error}::${customMessage}`;
  }
  throw new Error(errorMessage);
}
