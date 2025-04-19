import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/features/counterSlice';

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Page Yeison</h1>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
