import { useState, useEffect } from "react";


function App() {
  const [counter, setCounter] = useState(0);

  const [id, setId] = useState(1);
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + id)
      .then(response => response.json())
      .then(json => setTask(json))
  }, [id]);

  const handleIncrement = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  return (
    <div>
      <h1 onClick={() => setId((prevId) => prevId + 1)}>{task ? task.title : "no task yet"}</h1>

      <h1 style={{ cursor: "pointer" }} onClick={handleIncrement}>
        Counter : {counter}
      </h1>

    </div>

  );
}

export default App;
