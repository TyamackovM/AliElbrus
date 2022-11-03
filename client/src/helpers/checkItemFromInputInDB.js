export async function checkItemFromInputInDB(value) {
  const response = await fetch('http://localhost:4000/check-item', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  return response.json();
}
