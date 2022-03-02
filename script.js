const expenseName = document.getElementById("name");
const expenseDate = document.getElementById("date");
const expenseAmount = document.getElementById("amount");
const expensesTable = document.getElementById("expenses-table");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addExpense);

//Se llama al tocar 'add expense'
function addExpense() {
  //Valido los datos
  if (expenseName.value.length >= 2 && expenseName.value.length <= 20) {
    if (expenseAmount.value >= 1 && expenseAmount.value <= 10000) {
      //Mando los 3 valores por función
      newExpense(expenseName.value, expenseDate.value, expenseAmount.value);
      //dejar en blanco los input
      expenseName.value = "";
      expenseDate.value = "";
      expenseAmount.value = "";
    } else {
      alert("Invalid amount. Enter the amount correctly");
      expenseAmount.value = "";
    }
  } else {
    alert("Invalid name.");
    expenseName.value = "";
  }
}

//Para cargar el gasto en la tabla
function newExpense(expenseName, expenseDate, expenseAmount) {
  /* Meto los valores en los td */
  //Nombre
  let tdName = document.createElement("td");
  tdName.innerHTML = expenseName;
  tdName.classList.add("expenses"); //Agrego clase
  //Fecha
  let tdDate = document.createElement("td");
  tdDate.innerHTML = expenseDate;
  tdDate.classList.add("expenses"); //Agrego clase
  //Gasto
  let tdAmount = document.createElement("td");
  tdAmount.innerHTML = `$${expenseAmount}`;
  tdAmount.classList.add("expenses"); //Agrego clase
  //Botón para borrar
  let tdButton = document.createElement("td");
  tdButton.classList.add("expenses"); //Agrego clase
  let clearButton = document.createElement("button");
  clearButton.classList.add("buttons");
  clearButton.textContent = "X";
  clearButton.addEventListener("click", (e) => {
    //para remover la fila
    e.target.parentNode.parentNode.remove();
  });
  tdButton.appendChild(clearButton);
  //Creo la fila
  let newRow = document.createElement("tr");
  newRow.appendChild(tdName);
  newRow.appendChild(tdDate);
  newRow.appendChild(tdAmount);
  newRow.appendChild(tdButton);

  expensesTable.appendChild(newRow);
}
