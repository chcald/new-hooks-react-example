import React,{ useState, useEffect} from 'react';

export default function Example2() {
  const [show, setShow] = useState(true);

  function MouseColor() {
    const [color, setColor] = useState('orange')

    useEffect( () => {
        function onMouseMove(event){
            if ( event.clientX < window.innerWidth / 2 ) {
            setColor('red') }
            else {
            setColor('yellow')
            }
        }
        console.log('executing')

        window.addEventListener('mousemove', onMouseMove)
        return () => {
          console.log('cleaning')
          window.removeEventListener('mousemove', onMouseMove)
        }

    }, [])

    console.log(`render happended`)
    return <div style = {{height:'100vh', background: color}} ></div>;
}

  return (
    <>
      <button onClick = { () => setShow(false)}> Stop Show</button>
      { show ? <MouseColor/> : null }
    </>
  );

}
