import React from 'react'; // Import React
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes for routing
import UserAuthForm from "./pages/userauthform"; // Import UserAuthForm for sign-in and register pages
import FinalForm from './components/finalform';
import { Footer } from './components/footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        {/* Main Form Route */}
        <Route path="/" element={<FinalForm/>} />

        {/* Authentication Routes */}
        <Route path="/signin" element={<UserAuthForm />} />
        <Route path="/register" element={<UserAuthForm isRegister={true} />} />

        {/* Catch-all Route for 404 - Page Not Found */}
        <Route path="*" element={<NotFound/>} />
      </Routes>

      {/* Footer Component */}
      <Footer/>
    </>
  );
}

export default App;
