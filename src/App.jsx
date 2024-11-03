import { useState } from 'react';

function NameList() {
  const [list, setList] = useState(["Name1", "Name2", "Name3"]);

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  
  function addOne() {
    setCount(count + 1);
  }

  return <div className="App">
    <button onClick={addOne}>
      Count: {count}
    </button>
  </div>;
}

function App() {
  return <div>
    <Counter/>
    <Counter/>
    <NameList/>
  </div>
}

export default App;