export function debounce<T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T) => {
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
    timer = setTimeout(cb, delay, ...args);
  };
}
