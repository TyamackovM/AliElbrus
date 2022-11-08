import React, { useEffect } from 'react';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import getItemsFieldsForAdmin from '../../helpers/getItemsFieldsForAdmin';

import OneInput from './OneInput';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function AdminCabinet() {
  // const user = useSelector((state) => state.user);
  const [allFieldsArray, setAllFieldsArray] = useState([]);
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [allInputs, setAllInputs] = useState();

  useEffect(() => {
    (async function () {
      const result = await getItemsFieldsForAdmin();
      const array = Object.keys(result);
      setAllFieldsArray(array);
    })();
  }, []);

  const handler = (event) => {
    const qwe = event.target.value;
    setInput1(qwe);
  };

  const handler2 = (event) => {
    const qwe2 = event.target.value;
    // setInput({ [event.target.value]:  })
    setInput2(qwe2);
    setAllInputs({ ...allInputs, [input1]: input2 });
    // console.log(allInputs, 888888888);
  };

  const handler3 = (event) => {
    setAllInputs({ ...allInputs, [event.target.name]: event.target.value });
  };

  console.log(allInputs, '-----');
  return (
    <>
      <div onClick={() => console.log(allFieldsArray)}>ФФФФФФФФФФФФФФФФФФФ</div>

      <div>
        <div>
          <label for="cars">Choose a tag: </label>
          <select onChange={handler} name="tag1" id="cars">
            <option>Выбери тег</option>
            <option value="color">Color</option>
            <option value="size">Size</option>
            <option value="brand">Brand</option>
            <option value="processor">Processor</option>
          </select>
          <input onChange={handler2} name="first" type="text" />
        </div>
        <label for="cars">Choose a tag: </label>
        <div>
          <select onChange={handler} name="cars" id="cars">
            <option>Выбери тег</option>
            <option value="color">Color</option>
            <option value="size">Size</option>
            <option value="brand">Brand</option>
            <option value="processor">Processor</option>
          </select>
          <input onChange={handler2} type="text" />
        </div>
        <div>
          price: <input onChange={handler3} name="price" type="text" />$
        </div>
        <div>
          Image
          <input onChange={handler3} name="image" />
        </div>
        <div>
          Title <input onChange={handler3} name="title" />
        </div>
        <select onChange={handler3} name="category_id" id="cars">
          <option>Выберите категорию</option>
          <option value="1">Dresses</option>
          <option value="2">Women's hoodies</option>
          <option value="3">Women's shirts</option>
          <option value="4">Women's jeans</option>
          <option value="5">Women's shoes</option>
          <option value="6">Men's suits</option>
          <option value="7">Men's jeans & pants</option>
          <option value="8">Men's sweaters</option>
          <option value="9">Men's jackets</option>
          <option value="10">Men's shoes</option>
          <option value="11">Phones</option>
          <option value="12">Walkie Talkie</option>
          <option value="13">Accessories</option>
          <option value="14">Laptops</option>
          <option value="15">Desktops</option>
          <option value="16">Tablets</option>
          <option value="17">Cameras</option>
          <option value="18">TVs</option>
          <option value="19">Drones</option>
          <option value="20">Watches</option>
          <option value="21">Rings</option>
          <option value="22">Earings</option>
          <option value="23">Cat Supplies</option>
          <option value="24">Furniture</option>
          <option value="25">Decor</option>
        </select>
      </div>
    </>
  );
}
