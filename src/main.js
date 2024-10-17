//Home 섹션 아래로 스크롤시 투명하게 처리
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 610) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const home = document.querySelector(".home__container");

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

//arrow up
window.addEventListener("scroll", function () {
  const arrowUp = document.querySelector(".arrow-up");
  const scrollY = window.scrollY || window.pageYOffset;

  if (document.body.scrollHeight - window.innerHeight - scrollY < 200) {
    arrowUp.classList.add("show");
  } else {
    arrowUp.classList.remove("show");
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
      threshold: 0.5, //
    }
  );

  // 모든 content_tab 요소
  targets.forEach((target) => observer.observe(target));

  const targetFooter = document.querySelector(".footer_fade");
  observer.observe(targetFooter);
});
