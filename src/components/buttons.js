import { useState } from 'react';

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onclick={handleClick} />
      <MyButton count={count} onclick={handleClick} />
    </div>
  );
}

function MyButton({count, onclick}) {

  return (
    <button onClick={onclick}>
      Clicked {count} times
    </button>
  );
}