// scripts/build-posts.js
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDir = path.join(__dirname, "../src/posts");
const outFile = path.join(__dirname, "../src/posts.json");

if (!fs.existsSync(postsDir)) {
  console.error("❌ posts 폴더가 없습니다. src/posts 디렉토리를 만들어주세요.");
  process.exit(1);
}

const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

const posts = files.map((file) => {
  const filePath = path.join(postsDir, file);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug: file.replace(/\.md$/, ""),
    ...data,
    content,
  };
});

// 최신 글이 위로 오게 정렬
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outFile, JSON.stringify(posts, null, 2));
console.log("✅ posts.json 생성 완료!");
