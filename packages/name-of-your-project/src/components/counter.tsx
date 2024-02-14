import { useState, useEffect } from 'react';

function Counter() {
  // State for the count
  const [count, setCount] = useState(0);

  // Function to handle incrementing count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Log when component is mounted
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Log when count state changes
  useEffect(() => {
    console.log("State changed: count =", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Add</button>
    </div>
  );
}

export default Counter;