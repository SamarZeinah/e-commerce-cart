import Home from "./components/Home";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDetails from "./components/CardDetails";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<CardDetails />} />
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
