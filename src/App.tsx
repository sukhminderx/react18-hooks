import React, { useId, useState, useTransition } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setTimeout(()=>{
      startTransition(() => {
        setCount(c => c + 1);
      })
    }, 2000);
  }
  return (
    <div className="App">
          <div>  {isPending && <div>Spinner </div>}</div>
      <button onClick={handleClick}>{count}</button>
     <Checkbox/>
    </div>
  );
}

export default App;


function Checkbox() {
  const id = useId();
  console.log(id)
  const id2 = useId();
  console.log(id2)
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react"/>
    </>
  );
};