//select elements
const balanceElement = document.querySelector(".balance .value");
const incomeTotalElement = document.querySelector(".income-total");
const outcomeTotalElement = document.querySelector(".outcome-total");
const incomeElement = document.querySelector("#income");
const expenseElement = document.querySelector("#expense");
const allElement = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

//select the buttons
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

//select input buttons
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

//add entries to the list
addExpense.addEventListener("click", function () {
    // if one of the inputs is empty then => exit
    if (!expenseTitle.value || !expenseAmount.value) {
        return;
    }
    //save the entry to the list
    let expense = {
        type: "expense",
        title: expenseTitle.value,
        amount: parseInt(expenseAmount.value)
    }
    //push entry tot he list
    ENTRY_LIST.push(expense);

    updateUI();
    clearInput([expenseTitle, expenseAmount]);
})

addIncome.addEventListener("click", function () {
    // if one of the inputs is empty then => exit
    if (!incomeTitle.value || !incomeAmount.value) {
        return;
    }
    //save the entry to the list
    let income = {
        type: "income",
        title: incomeTitle.value,
        amount: parseInt(incomeAmount.value)
    }
    //push entry tot he list
    ENTRY_LIST.push(income);

    updateUI();
    clearInput([incomeTitle, incomeAmount]);
})

function updateUI() {
    income = calculateTotal("income", ENTRY_LIST);
    outcome = calculateTotal("expense", ENTRY_LIST);
    balance = Math.abs(calculateBalance(income, outcome));

    //update UI
    clearElement([expenseList, incomeList, allList]);

    //determine sign of balance
    let sign = (income >= outcome) ? "$" : "-$";

    //update UI
    balanceElement.innerHTML = `<small>${sign}</small>${balance}`;
    outcomeTotalElement.innerHTML = `<small>$</small>${outcome}`;
    incomeTotalElement.innerHTML = `<small>$</small>${income}`;

    ENTRY_LIST.forEach((entry ,index) => {
        if (entry.type === "expense") {
            showEntry(expenseList, entry.type, entry.title, entry.amount, index)
        } else if (entry.type === "income") {
            showEntry(incomeList, entry.type, entry.title, entry.amount, index)
        }
        showEntry(allList, entry.type, entry.title, entry.amount, index)
    });
}

function showEntry(list, type, title, amount, id) {
    const entry = ` <li id="${id}" class="${type}">
                        <div class="entry">${title}: $${amount}</div>
                        <div id="edit"></div>
                        <div id="delete"></div>
                    </li>`;

    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry);
}

function clearElement(elements) {
    elements.forEach(element => {
        element.innerHTML = "";
    })
}

function calculateTotal(type, list) {
    let sum = 0;

    list.forEach( entry => {
        if (entry.type === type) {
            sum  += entry.amount;
        }
    })

    return sum;
}

function calculateBalance(income, outcome) {
    return income - outcome;
}

function clearInput(inputs) {
    inputs.forEach( input => {
        input.value = "";
    })
}
function show(element) {
    element.classList.remove("hide");
}

function hide( elements ) {
    elements.forEach( element => {
        element.classList.add("hide");
    })
}

function active(element) {
    element.classList.add("active");
}

function inactive( elements ) {
    elements.forEach( element => {
        element.classList.remove("active");
    })
}