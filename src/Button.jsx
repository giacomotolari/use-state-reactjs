export default function Button({
    // eslint-disable-next-line react/prop-types
    count, setCount
}) {

  const increment = (number) => {
    console.log("count before increment:", count);
    setCount(count + number);
    console.log("count after increment:", count);
  };

  return <button onClick={() => increment(10)}>count is {count}</button>;
}
