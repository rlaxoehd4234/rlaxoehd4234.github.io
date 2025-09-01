import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />   {/* 메인: One Page Scroll */}
          <Route path="/about" element={<AboutPage />} /> {/* 상세 페이지 */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
