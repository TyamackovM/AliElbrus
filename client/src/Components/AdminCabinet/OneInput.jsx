import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function OneInput({ el, i }) {
  console.log('el: ', el);

  const clickHandler = () => {
    console.log('clickHandler');
  };

  return (
    <Panel onClick={clickHandler} header={`This is panel header ${i}`} key={i}>
      <p>5555555555555</p>
    </Panel>
  );
}
