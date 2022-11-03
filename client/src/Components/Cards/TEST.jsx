import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import OneCard from './OneCard';

export default function TEST() {
  const location = useLocation();
  const [items, setItems] = useState(location.state.searchResult);
  console.log('location: ', location);

  // console.log('searchResult: ', searchResult);
  const filter = location.state.searchResult
    .filter((el) => el.color)
    .map((el) => el.color);
  const filter2 = location.state.searchResult
    .filter((el) => el.size)
    .map((el) => el.size);
  const arr = [...new Set(filter)];
  const arr2 = [...new Set(filter2)];

  console.log('filter: ', filter);
  const handler = async (event) => {
    console.log('event: ', event.target.innerText);

    const response = await fetch('http://localhost:4000/check-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: location.state.searchWord,
        tag: event.target.innerText,
      }),
    });
    const responseToJSON = await response.json();
    setItems(responseToJSON);
  };

  return (
    <>
      <div>
        {arr.map((el) => (
          <button onClick={handler}>{el}</button>
        ))}
      </div>
      <div>
        {arr2.map((el) => (
          <button onClick={handler}>{el}</button>
        ))}
      </div>
      <div>
        {items.map((el) => (
          <div>{el.color}</div>

        ))}
      </div>
    </>
  );
}
