export function debounce<T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    // console.log('debounce!@!', args);
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
}

export function throttle<T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    if (timer) return;
    console.log('throttle!@!', args);
    timer = setTimeout(cb, delay, ...args);
  };
}
