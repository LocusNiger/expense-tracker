const expenseName = document.getElementById("name");
const expenseDate = document.getElementById("date");
const expenseAmount = document.getElementById("amount");
const expensesTable = document.getElementById("expenses-table");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addExpense);

//Se llama al tocar 'add expense'
function addExpense() {
  //Mando los 3 valores por función
  newExpense(expenseName.value, expenseDate.value, expenseAmount.value);
  //dejar en blanco los input
  expenseName.value = "";
  expenseDate.value = "";
  expenseAmount.value = "";
}

//Para cargar el gasto en la tabla
function newExpense(expenseName, expenseDate, expenseAmount) {
  /* Meto los valores en los td */
  //Nombre
  let tdName = document.createElement("td");
  let tdNameText = document.createTextNode(expenseName);
  tdName.appendChild(tdNameText);
  //Fecha
  let tdDate = document.createElement("td");
  let tdDateText = document.createTextNode(expenseDate);
  tdDate.appendChild(tdDateText);
  //Gasto
  let tdAmount = document.createElement("td");
  let tdAmountText = document.createTextNode(expenseAmount);
  tdAmount.appendChild(tdAmountText);
  //Botón para borrar
  let tdButton = document.createElement("td");
  let clearButton = document.createElement("button");
  clearButton.classList.add("clear-btn");
  clearButton.textContent = "X";
  clearButton.addEventListener("click", (e) => {
    //para remover la fila
    e.target.parentNode.parentNode.remove();
  });
  tdButton.appendChild(clearButton);
  //Creo la fila
  let newRow = document.createElement("tr");
  newRow.classList.add("expenses"); //Agrego clase
  newRow.appendChild(tdName);
  newRow.appendChild(tdDate);
  newRow.appendChild(tdAmount);
  newRow.appendChild(tdButton);

  expensesTable.appendChild(newRow);
}
