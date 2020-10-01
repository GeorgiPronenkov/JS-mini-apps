const colorBtn = document.querySelector('.color_Btn');
const bodyBackground = document.querySelector('body');
const colors = ['blue', 'green', 'red', '#3b5998'];

colorBtn.addEventListener('click', changeColor);

function changeColor () {
    //bodyBackground.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random() * colors.length);
    bodyBackground.style.backgroundColor = colors[random];
}
