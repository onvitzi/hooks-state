import {useState}  from 'react';


export const CounterApp = () => {
    // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  
  return (
    <>
        <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    </>
  )
}
