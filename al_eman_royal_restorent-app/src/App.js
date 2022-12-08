import Header from "./components/header/header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/home/home";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;