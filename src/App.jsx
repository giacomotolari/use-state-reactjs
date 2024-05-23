import "./App.css";
import { useState } from "react";

function App() {
  console.log("App component is rendering");
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("count before increment:", count);
    setCount(count + 1);
    console.log("count after increment:", count);
  };

  return (
    <>
      <button onClick={increment}>count is {count}</button>
    </>
  );
}

export default App;
