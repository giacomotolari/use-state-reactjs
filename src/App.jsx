import "./App.css";

function App() {
  console.log("App component is rendering")
  let count = 0;

  const increment = () => {
    console.log("count before increment:", count);
    count++;
    console.log("count after increment:", count);
  };

  // dom + virtual dom

  return (
    <>
      <button onClick={increment}>count is {count}</button>
    </>
  );
}

export default App;
