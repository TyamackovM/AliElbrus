export default async function getItemsFieldsForAdmin() {
  const res = await fetch('http://localhost:4000/get-fields', {
    method: 'GET',
    credentials: 'include',
  });
  return res.json()
}
