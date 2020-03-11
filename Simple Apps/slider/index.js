const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {

    if(counter === 7){
        counter = 0;
    }
    counter++;

    container.style.backgroundImage = `url(img/bcg-${counter}.jpg`;
}

function prevSlide() {

    if(counter === 0){
        counter = 5;
    }
    counter--;

    container.style.backgroundImage = `url(img/bcg-${counter}.jpg`;
}
