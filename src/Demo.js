import { useEffect, useState } from 'react'
import { io } from "socket.io-client"; // or Signal

function Demo() {
  let name = "mike";
  const [count, setCount] = useState(0);
  const [data, setData] =useState("")

  useEffect(() => {
    const socket = io("ws://localhost:3002");
    socket.on("server-data", (data) => {
      console.log(data);
      setData(data.message);
    });
    // unmounting
    return () => {
      // unload logic here
      socket.off("server-data");
    }
  }, [
    count,
  ]);

  return (
    <div>
      <h1>{data}</h1>
      <p>Demo Component</p>
      <p>{name}</p>
      <p>{name.toUpperCase()}</p>
      <p>{9 + 9}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Demo;
