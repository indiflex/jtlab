export function memoize<T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T
) {
  const cacheTable: Record<string, any> = {};
  return (...args: Parameters<T>) => {
    const k = [...args].toSorted().join();

    // TO-TEST
    // if (cacheTable.hasOwnProperty(k)) {
    //   console.log(`'${k}' is Already Cached. Value is ${cacheTable[k]}`);
    //   return cacheTable[k];
    // }
    // console.log(`key '${k}' will be cached next time,,,`);
    // return (cacheTable[k] = fn(...args));

    return cacheTable.hasOwnProperty(k)
      ? cacheTable[k]
      : (cacheTable[k] = fn(...args));
  };
}
