export function tryCatch<R>(cb: () => R, printError?: boolean): R | undefined {
  try {
    return cb();
  } catch (error) {
    if (printError) console.error(error);
    return undefined;
  }
}
