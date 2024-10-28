import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import UserAuthForm from "./pages/userauthform";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="signin" element={<UserAuthForm type="signin" />} />
        <Route path="register" element={<UserAuthForm type="register" />} />
      </Routes>
    </>
  );
}

export default App;
