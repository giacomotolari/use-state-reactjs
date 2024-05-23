import "./App.css";
import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button count={count} setCount={setCount} />
    </>
  );
}

export default App;
