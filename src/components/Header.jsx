import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "20px", background: "#222", color: "#fff" }}>
      <h1>My React Blog</h1>
      <nav>
        <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>홈</Link>
        <Link to="/about" style={{ color: "#fff" }}>소개</Link>
      </nav>
    </header>
  );
}