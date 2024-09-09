//Home 섹션 아래로 스크롤시 투명하게 처리함

const home = document.querySelector(".home__container");

// const home = document.querySelector(".home__container");
// document.addEventListener("scroll", () => {
//   home.style.opacity = 1 - window.scrollY / (homeHeight / 2.5);
// });

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함

// const homeHeight = home.offsetHeight;
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// 프로젝트 스크롤
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".project_container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.5, // 요소의 10%가 보일 때 trigger
    }
  );
  // 모든 content_tab 요소를 관찰하도록 설정
  targets.forEach((target) => observer.observe(target));

  const targetFooter = document.querySelector(".footer_fade");
  observer.observe(targetFooter);
});
