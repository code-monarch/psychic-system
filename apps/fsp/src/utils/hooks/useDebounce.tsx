/* eslint-disable no-unused-vars */
type DebounceFunction<T extends any[]> = (...args: T) => void;

export default function debounce<T extends any[]>(
  func: (...args: T) => void,
  delay: number
): DebounceFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
