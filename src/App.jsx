import "./App.css";
import { useState } from "react";

function App() {
  // the component is re-rendered when the state is updated and when the component is mounted
  console.log("App component is rendering");
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("count before increment:", count);
    setCount(count + 1); // this will trigger re-render and update the count incementing by 1
    console.log("count after increment:", count); // this will log the previous value of count because the state is not updated yet
  };

  return (
    <>
      {/* the onClick event trigger the "increment" function */}
      <button onClick={increment}>count is {count}</button>
    </>
  );
}

export default App;
