import { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
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



export default App;
