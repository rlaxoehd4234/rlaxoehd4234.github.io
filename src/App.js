import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/posts" element={<h1>Post List</h1>} />
        <Route path="/posts/:id" element={<h1>Post Detail</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
