//select elements:
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//variables
let LIST,
      id;

//get item from localstorage
let data = localStorage.getItem("TODO");

//check data is not empty
if (data) {
    LIST = JSON.stringify(data);
    id = LIST.length; //set id to the last one in the list
    loadList(LIST); //load the list to the user interface
} else {
    //if data is not empty
    LIST = [];
    id = 0;
}

//load items to the user's interface
function loadList(array) {
    array.forEach(function (item) {
       addToDo(item.name, item.id, item.done, item.trash);
    });
}

//clear the local storage:
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

//show today date:
const today = new Date();
const options = { weekday:"long", month:"short", day:"numeric" };
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add to-do method
function addToDo(toDo, id, done, trash) {

    if (trash) {
        return;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `
                   <li class="item">
                     <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                     <p class="text ${LINE}">${toDo}</p>
                     <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                   </li> 
                 `;
    const position = "beforeend"; //place input item at the end
    list.insertAdjacentHTML(position, item);
}

//add item to the list user
document.addEventListener("keyup", function (e) {

    if (event.keyCode === 13) { //13 is enter key
        const toDo = input.value;
        if (toDo) { //if input is not empty:
            addToDo(toDo, id, false, false);

            LIST.push({
               name: toDo,
               id: id,
               done: false, //done === completed
               trash: false
            });

            //add item to localstorage
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
});

//complete to-do
function completeToDo(element) {
    //if CLASS exist > remove class
    element.classList.toggle(CHECK); //if is checked >> unchecked
    element.classList.toggle(UNCHECK); //if is unchecked >> checked
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    //update list
    LIST[element.id].done = !LIST[element.id].done;
}

//remove to-do
function removeTodo(element) { //element - item from user interface
    element.parentNode.parentNode
                      .removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

//target items created dynamically
list.addEventListener("click", function (event) {

   const element = event.target; //return clicked element inside list element
   const elementJob = element.attributes.job.value; //complete or delete

   if (elementJob === "complete") {
       completeToDo(element);
   } else if(elementJob === "delete") {
       removeTodo(element);
   }

    //add item to localstorage
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

