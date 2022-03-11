const track = document.querySelector('.carousel__track');
const slides = Array.from('track.children');
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('carousel__nav');
const dots = Array.from('dotsNav.children');

const slideSize = slides[0].getBoundingClientRect().width;
// console.log(slidewidth);

//arange slides next to antother 
//slides[0].slide.left = slideWidth * 0 + 'px';
//slides[1].slide.left = slideWidth * 1 + 'px';
//slides[2].slide.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) =>{
    slide.style.left  = slideWidth * index + 'px'; 

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left;
        currentSlide.slassList.remove(' current-slide');
        targetSlide.classList.add('current-slide');
    }
}

//LOOP 
slides.forEach((slide, index)=>{
    slide.style.left = slideWidth * index + 'px'; 
});

//når der klikkes på v.pil, bevæges slide til venstre
prevButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
const prevSlide = curretnSlide.previousElementSibling; 
const currentDot = dotsNav.querySelector('current-slide'); 
const prevDot = currentDot.previousElementSibling; 

moveToSlide(track, currentSlide, prevSlide);
updateDots(currentDot, prevDot);

});


//når der klikkes på h.pil, bevæges slide til højre  
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('current-slide'); 
    const nextDot = currentDot.nextElementSibling; 
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});

const updateDots = (currentDot, target) => {
    currentDot.classList.remove('current targetDot')
    targetDot.classList.add('current-slide'); 
}

//ved klik, indikeres nav ved at slide bevæges

dotsNav.addEventListener('click', e => {
    //hvilken prik der klikkes på
    const targetDot = e.target.closest('button'); 

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');s
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    moveToSlide(track, current, targetSlide);
    updateDots(currentDot, targetDot);

})


