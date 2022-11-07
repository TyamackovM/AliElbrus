export async function loadFilterItemPagination(obj) {
    console.log('obj', obj);
    const response = await fetch("http://localhost:4000/get-next-filter-page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
    return response.json();
}