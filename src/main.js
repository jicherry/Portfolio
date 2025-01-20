window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollThreshold = window.innerHeight * 0.96;

  if (window.scrollY > scrollThreshold) {
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

//헤더부분
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".navigation a");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("selected"));

      item.classList.add("selected");
    });
  });
  const typingTexts = document.querySelectorAll(".typing-text");

  typingTexts.forEach((typingText) => {
    typingText.addEventListener("animationend", () => {
      typingText.classList.add("animation-complete");
    });
  });
});

//푸터
document.addEventListener("scroll", () => {
  const footerTexts = document.querySelectorAll(".f_text");
  const footerContainer = document.querySelector(".footer_container");
  const screenHeight = window.innerHeight;
  const footerTop = footerContainer.getBoundingClientRect().top;

  // 화면의 80% 지점에 도달했을 때 애니메이션 시작
  if (footerTop < screenHeight * 0.8) {
    footerTexts.forEach((text, index) => {
      text.style.animation = "none";
      void text.offsetWidth;
      text.style.animation = `dropText 1.2s ease-in-out ${
        index * 0.2
      }s forwards`;
    });
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
