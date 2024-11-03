import { useState } from 'react';

function App() {
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

export default App;