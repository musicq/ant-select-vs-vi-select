export function dataFactory(length) {
  return Array.from({ length }).map((_, i) => ({
    id: i,
    v: Math.random().toString(36)
  }));
}
