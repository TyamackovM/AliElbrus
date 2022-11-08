export default async function updateUserStatus(newStatus) {
  console.log('newStatus: ', newStatus);
  const res = await fetch('http://localhost:4000/update-status', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( newStatus ),
    credentials: "include",
  });
  return res.json();
}