export function wrap<E extends Error, T>(p: Promise<T>): Promise<[E, T]> {
  return p
    .then((res) => [undefined, res])
    .catch((err) => [err, undefined]) as Promise<[E, T]>;
}
