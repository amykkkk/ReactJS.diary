import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";
const Counter = ({ initialValue }) => {
  //const Counter = (props) => {
  //console.log(props); // props는 객체로 받아옴

  const [count, setCount] = useState(initialValue);
  //const [count, setCount] = useState(props.initialValue);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

// 기본값
Counter.defalutProps = {
  initialValue: 0,
};

export default Counter;
