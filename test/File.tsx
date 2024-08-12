export const MyComponent = () => {
  const handleClick = () => {
    console.log({
      a: 5,
      b: 12,
    });
  };

  return (
    <div>
      <h1>MyComponent</h1>
      <button onClick={handleClick}></button>
    </div>
  );
};
