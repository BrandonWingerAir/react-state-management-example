import { useState } from 'react';

function NameList() {
  const [list, setList] = useState(["Item 1", "Item 2", "Item 3"]);
  const [item, setItem] = useState(() => "New Item");

  const addItem = () => {
    setList([...list, item]);
    setItem("");
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <input 
        type="text" 
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={addItem}
      >
        Add Item
      </button>
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