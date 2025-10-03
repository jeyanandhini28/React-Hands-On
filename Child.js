import { useState, useEffect } from "react";
const Child = ({ onUpdate }) => {
  const [triggerData, setTriggerData] = useState(false);

  useEffect(() => {
    if (triggerData) fetchData();
  }, [triggerData]);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    onUpdate(data);
  }

  return (
    <div>
      <button onClick={() => setTriggerData(true)}>Fetch</button>
    </div>
  );
};
