import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Layout from "./layouts/Layout";



function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NotFound />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
