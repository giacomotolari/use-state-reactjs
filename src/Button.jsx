/* eslint-disable react/prop-types */
export default function Button({ count, setCount }) {
  const increment = (number) => {
    setCount(count + number);
  };

  // when the button is clicked, the count will be incremented by 10
  // we need an anonymous function here because we want to pass a parameter.
  // Without the anonymous function, the function would be called immediately when the component is rendered, and
  // it will cause an infinite loop because it will call the increment function immediately.
  return <button onClick={() => increment(10)}>count is {count}</button>;
}
