const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMessage);

function sendMessage() { 
    let contentText = messageIn.value;
    if (contentText === '') {
        alert('Please enter valid input');
    } else {
        messageOut.innerHTML = contentText;
        messageIn.value = '';
    }
}