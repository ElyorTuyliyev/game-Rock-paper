import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
