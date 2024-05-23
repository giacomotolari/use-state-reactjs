import "./App.css";

function App() {
  
  let count = 0;

  const increment = () => {
    console.log("count before increment:", count);
    count++;
    console.log("count after increment:", count);
  };

  return (
    <>
      <button onClick={increment}>count is {count}</button>
    </>
  );
}

export default App;
