const menuItems = document.querySelectorAll(".nav-center li");
const pages = document.querySelectorAll(".page");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    // active 상태 변경
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // 해당 섹션 표시
    const target = item.getAttribute("data-page");
    pages.forEach(p => {
      p.classList.remove("active");
      if (p.id === target) p.classList.add("active");
    });
  });
});
