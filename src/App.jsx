import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import SignUpForm from "./Pages/SignUpForm";
import LoginPage from "./Pages/LoginPage";

function App() {
  // routing here
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
