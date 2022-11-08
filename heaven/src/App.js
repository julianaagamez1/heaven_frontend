import Principal from "./components/Principal";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./components/Productos";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal/>} exact />
        <Route path="/login" element={<Login/>} />
        <Route path="/productos" element={<Productos/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
