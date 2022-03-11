const track = document.querySelector('.carousel__track');
const slides = Array.from(track.Children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('carousel__nav');
const dots = Array.from(dotsNav.children); 

const slideSize = slides [0].getBoundingClientRect();
const slideWidth = slideSize.width;
console.log(slideSize);
// console.log(slidewidth);

