export default function filterMap (array) {
    const filter = array
    .filter((el) => el.color)
    .map((el) => el.color);
    const filter2 = array
    .filter((el) => el.size)
    .map((el) => el.size);
    const filter3 = array
    .filter((el) => el.brand)
    .map((el) => el.brand);
    const filter4 = array
    .filter((el) => el.processor)
    .map((el) => el.processor);
    const filter5 = array
    .filter((el) => el.display)
    .map((el) => el.display);
    const filter6 = array
    .filter((el) => el.gender)
    .map((el) => el.gender);
    const filter7 = array
    .filter((el) => el.style)
    .map((el) => el.style);
  const color = [...new Set(filter)];
  const size = [...new Set(filter2)];
  const brand = [...new Set(filter3)];
  const processor = [...new Set(filter4)];
  const display = [...new Set(filter5)];
  const gender = [...new Set(filter6)];
  const style = [...new Set(filter7)];
  return {color, size, brand, processor, display, gender, style }
}
