import Navbar from "./components/navbar";
import { Route , Routes } from "react-router-dom";
import UserAuthForm from "./pages/userauthform";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="signin" element={<UserAuthForm/>} />
      </Route>
    </Routes>
  );
}


export default App
