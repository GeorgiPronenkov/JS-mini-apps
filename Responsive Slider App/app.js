//select all slides
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;

let slideInterval;

//next
const nextSlide = () => {
    const current = document.querySelector('.current');
    //remove current class:
    current.classList
           .remove('current');
    //check for next slide
    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList
                                  .add('current');
    } else {
        //add current to start
        slides[0].classList
                 .add('current');
    }

    setTimeout(() => current.classList.remove('current'));
}

//previous
const prevSlide = () => {
    const current = document.querySelector('.current');
    //remove current class:
    current.classList
           .remove('current');
    //check for previous slide
    if (current.previousElementSibling) {
        //add current to previous sibling
        current.previousElementSibling.classList
                                      .add('current');
    } else {
        //add current to last
        slides[slides.length - 1].classList
                                 .add('current');
    }
    setTimeout(() => current.classList
                            .remove('current'));
}

//buttons events
next.addEventListener('click', function(e) {
    nextSlide();
     if (auto) {
        //clear the interval
        clearInterval(slideInterval); 
        slideInterval = setInterval(nextSlide, intervalTime);
     }    
});

prev.addEventListener('click', function(e) {
    prevSlide();  
    if (auto) {
        //clear the interval
        clearInterval(slideInterval); 
        slideInterval = setInterval(nextSlide, intervalTime);
     }      
});

//auto slide
if (auto) {
    //run next slide in interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}