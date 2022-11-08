export default async function addNewItemToDB(newItem) {
  await fetch('http://localhost:4000/add-new-item', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ newItem }),
    credentials: 'include',
  });
}
