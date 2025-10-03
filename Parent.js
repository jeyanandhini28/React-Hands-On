import { useEffect, useState } from "react";
import Child from "/Child.js";

const Parent = () => {
  const [data, setData] = useState("Loading...");
  function handleUpdate(data) {
    setTimeout(() => {
      setData(data);
    }, 3000);
  }

  return (
    <div>
      <Child onUpdate={handleUpdate} />
      <p>{data.title}</p>
    </div>
  );
};
export default parent;
