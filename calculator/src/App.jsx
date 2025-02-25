import { useState } from "react";
import { CalBody } from "./components/CalBody";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CalBody />
    </>
  );
}

export default App;
