//array for the numbers (#f453B0)
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn =  document.querySelector('.hexBtn');
const bodyBackground = document.querySelector('body');
const hex = document.querySelector('.hex');

hexBtn.addEventListener('click', getHex); //getHex-callback function

function getHex() {
    let hexCol = '#';
    for (let i = 0; i < 9; i++) {
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol += hexNumbers[random];
        bodyBackground.style.backgroundColor = hexCol;
        hex.innerHTML = hexCol;
    }
}