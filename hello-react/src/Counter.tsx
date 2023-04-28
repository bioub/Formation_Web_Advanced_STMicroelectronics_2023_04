import { MouseEvent, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setCount(count + 1);
  }

  return (
    <button className="Counter" onClick={handleClick}>
      {count}
    </button>
  );
}

export default Counter;
