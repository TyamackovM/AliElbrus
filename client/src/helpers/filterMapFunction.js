export default function filterMap (array) {
    const filter = array
    .filter((el) => el.color)
    .map((el) => el.color);
  const filter2 = array
    .filter((el) => el.size)
    .map((el) => el.size);
  const color = [...new Set(filter)];
  const size = [...new Set(filter2)];
  return {color, size }
}
