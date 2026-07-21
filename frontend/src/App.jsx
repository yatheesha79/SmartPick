import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Compare from "./Pages/Compare";
import Productdetails from "./Pages/Productdetails";
import Profile from "./Pages/Profile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/compare" element={<Compare />} />

        <Route path="/productdetails" element={<Productdetails />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<Home />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;