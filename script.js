const sections = document.querySelectorAll("section");
const scrollIndicator = document.getElementById("scrollIndicator");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const sectionIds = Array.from(sections).map(sec => sec.id);

/**
 * 📏 스크롤 진행률 계산 및 업데이트 함수
 */
function updateProgress() {
  const winH = window.innerHeight;
  const scrollY = window.scrollY;
  // 섹션 스냅 환경에 맞춰 전체 스크롤 가능한 높이를 계산
  const maxScrollHeight = (sections.length - 1) * winH; 
  
  let scrollPercent = 0;

  if (maxScrollHeight > 0) {
    scrollPercent = (scrollY / maxScrollHeight) * 100;
  } else if (sections.length === 1) {
    scrollPercent = 0; 
  }

  // 진행률 바 업데이트
  progressBar.style.width = scrollPercent + "%";
  
  // 퍼센테이지 텍스트 업데이트
  progressPercent.textContent = Math.round(scrollPercent) + "%";

  // 스크롤 인디케이터 숨기기
  if (scrollY > winH * 0.5) {
    scrollIndicator.classList.add("hidden");
  } else {
    scrollIndicator.classList.remove("hidden");
  }
}

/**
 * 🖱️ 마우스 클릭으로 다음 섹션으로 이동하는 함수
 * @param {string} currentId 현재 섹션의 ID
 */
function scrollToNextSection(currentId) {
    const currentIndex = sectionIds.indexOf(currentId);
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < sections.length) {
        const nextSection = sections[nextIndex];
        // 다음 섹션으로 부드럽게 스크롤
        nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("마지막 섹션입니다.");
    }
}

// 📜 스크롤 이벤트 및 초기 로드 설정
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateProgress();
      ticking = false;
    });
    ticking = true;
  }
});

// 페이지 로드 및 창 크기 조정 시에도 확인
window.addEventListener("load", updateProgress);
window.addEventListener("resize", updateProgress); 

// 초기 실행
updateProgress();