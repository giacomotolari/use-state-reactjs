import "./App.css";
import { useState } from "react";
import Button from "./Button";

function App() {
  console.log("App component is rendering");
  const [count, setCount] = useState(0);


  return (
    <>
    <Button count={count} setCount={setCount} />
    </>
  );
}

export default App;
