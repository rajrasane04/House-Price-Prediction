import Navbar from "./components/navbar";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}/>
    </Routes>
  );
}


export default App
