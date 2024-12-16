import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  let pippo = count * 3;
  function incrementa(event) {
    console.log(event);
    setCount((count) => count + 1); // fn
    //setCount((count) => count + 1); // fn//
    //setTimeout(console.log(count), 1000);
  }

  return (
    <div>
      <div className="counter">{count}</div>
      <button onClick={incrementa}>Incrementa {pippo}</button>
    </div>
  );
}

export default Counter;
