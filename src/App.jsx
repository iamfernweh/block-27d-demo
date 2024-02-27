import { useState } from "react";
import Checkbox from "./Checkbox";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Button count={count} setCount={setCount} />
      <Checkbox labelOn="On" labelOff="Off" />
    </div>
  );
}

function Button({ count, setCount }) {
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

export default App;
