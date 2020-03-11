const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        let number = buttons[i].getAttribute("data-num");
        screen.value += number;
    });
}

equalBtn.addEventListener('click', function () {  
    let value = eval(screen.value);
    screen.value = value;
});

clearBtn.addEventListener('click', function(){
    screen.value = '';
});