export default async function geItemForBottomMainBlock() {
  const res = await fetch('http://localhost:4000/get-item-main-bottom', {
    method: 'GET',
    credentials: 'include',
  });
  return res.json()
}
