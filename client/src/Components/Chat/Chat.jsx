import { Button } from 'antd';
import React from 'react'
import { useState } from 'react';
import styles from './Chat.module.css'

export default function Chat() {

    const [ input, setInput ] = useState('')
    const [allMessages, setAllMessages] = useState([])

    function handlerInput(e) {
        setInput( {...input, [e.target.name]: e.target.value})
    }

    const ws = new WebSocket('ws://localhost:4000');
    
    ws.onopen = () => {
      console.log('onopen!!')
    }
    
   const submitClick  = ((e) => {
      e.preventDefault();
      setAllMessages( [...allMessages, input.chatInp])
      const jsonMess = JSON.stringify( input )
      ws.send(jsonMess)
      console.log('сообщение отправлено', jsonMess);

    })
    
    ws.onmessage = (e) => {
      const mess = JSON.parse(e.data)
      setAllMessages( [...allMessages, mess.chatInp])
      console.log('сообщение получено', mess);
    }
    // console.log(allMessages)
    console.log(input)

  return (
    <div>Chat
              <h2 id="users">Количество юзеров в чате: 0</h2>
      <hr />
      <form name="chatForm" className="d-flex formChat">
        <label htmlFor="exampleInput1" className="form-label">Введите сообщение</label>
        <input name="chatInp" onChange={handlerInput} type="text" className="form-control" id="exampleInput1" />
        <Button className={styles.btnReg} onClick={submitClick}  style={{ marginLeft: "3px" }}>Отправить</Button>
      </form>
      <hr />
      <div id="chatDiv" >{allMessages.map((el) => (
        <div>{el}</div>
      ))}</div>
    </div>
  )
}
