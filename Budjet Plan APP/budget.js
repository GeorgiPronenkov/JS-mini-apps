//select elements
const balanceElement = document.querySelector(".balance .value");
const incomeTotalElement = document.querySelector(".income-total");
const outcomeTotalElement = document.querySelector(".outcome-total");
const incomeElement = document.querySelector("#income");
const expenseElement = document.querySelector("#expense");
const allElement = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenceList = document.querySelector("#outcome .list");
const allList = document.querySelector("#all .list");

//select the buttons
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

//select input btns
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

//variables
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;
const DELETE = "delete", EDIT = "edit";

//event-listeners:
expenseBtn.addEventListener("click", function () {
    show(expenseElement);
    hide( [incomeElement, allElement] );
    active( expenseBtn );
    inactive( [incomeBtn, allBtn] );
})
incomeBtn.addEventListener("click", function () {
    show(incomeElement);
    hide( [expenseElement, allElement] );
    active( incomeBtn );
    inactive( [expenseBtn, allBtn] );
})
allBtn.addEventListener("click", function () {
    show(allElement);
    hide( [incomeElement, expenseElement] );
    active( allBtn );
    inactive( [incomeBtn, expenseBtn] );
})

function show(element) {
    element.classList.remove("hide");
}

function hide( elements ) {
    elements.forEach( element => {
        element.classList.add("hide");
    })
}

function active(element) {
    element.classList.remove("active");
}

function inactive( elements ) {
    elements.forEach( element => {
        element.classList.add("active");
    })
}