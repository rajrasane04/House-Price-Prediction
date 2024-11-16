import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import UserAuthForm from "./pages/userauthform";
import FinalForm from "./components/finalform";
import { Footer } from "./components/footer";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]); 

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<FinalForm />} />
        <Route path="/signin" element={<UserAuthForm />} />
        <Route path="/register" element={<UserAuthForm isRegister={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
