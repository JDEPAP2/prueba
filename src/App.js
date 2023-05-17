import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./main/Home.js";
import Selection from "./main/Selection.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="selection/" element={<Selection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
