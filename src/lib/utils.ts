/**
 * Returns a scaling function which will normalize a value within the given values array to between newMax (default 0) and newMin (default 1)
 * @param values values to be scaled
 * @returns
 */
export function normalize(
  values: number[],
): (val: number, newMin?: number, newMax?: number, constant?: number) => number {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return function (val: number, newMin = 0, newMax = 1, constant = 0.5) {
    val = Math.min(Math.max(val, min), max);
    const normalized = min < max ? (val - min) / (max - min) : constant;
    return normalized * (newMax - newMin) + newMin;
  };
}
