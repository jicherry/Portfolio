//Home 섹션 아래로 스크롤시 투명하게 처리함

const home = document.querySelector('.home__container');


// const home = document.querySelector('.home__container');
// const homeHeight = home.offsetHeight;
// document.addEventListener('scroll' , () => {
//     home.style.opacity = 1 - window.scrollY / (homeHeight / 2.5); 
// });

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll' , () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
})