import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
  );
}

export default App;
