const addButtton = document.querySelector('.addButton');
const inputValue = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        //create item div
        this.createDiv(itemName); 
    }

    createDiv(itemName) {
        let input = document.createElement('input'); 
        input.value = itemName;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
    }
}