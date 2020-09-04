import React,{ useState, useEffect} from 'react';

export default function example1() {
  const [count, setCount] = useState(0);

  useEffect( () => {
    console.log(`your count is ${count}`)
    document.title = `your count is ${count}`
  })

  return (
    <>
      <h1>The count is: {count}</h1>
      <button onClick = { () => setCount(count + 1)}> Increase</button>
    </>
  );

}
