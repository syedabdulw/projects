
// script.js

document.addEventListener('DOMContentLoaded', function() {
  checkUserLogin();
});

function login() {
  const email = document.getElementById('email').value;
  if (email) {
      localStorage.setItem('userEmail', email);
      showHomePage();
  } else {
      alert('Please enter your email');
  }
}

function checkUserLogin() {
  const email = localStorage.getItem('userEmail');
  if (email) {
      showHomePage();
  } else {
      showLoginPage();
  }
}

function showLoginPage() {
  document.getElementById('login-page').style.display = 'block';
  document.getElementById('home-page').style.display = 'none';
}

function showHomePage() {
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('home-page').style.display = 'block';
  loadNotes();
}

function logout() {
  localStorage.removeItem('userEmail');
  showLoginPage();
}

function submitNote() {
  const noteContent = document.getElementById('note-content').value;
  if (noteContent) {
      let notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.push(noteContent);
      localStorage.setItem('notes', JSON.stringify(notes));
      document.getElementById('note-content').value = '';
      loadNotes();
  } else {
      alert('Please enter a note');
  }
}

function loadNotes() {
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.forEach(note => {
      const noteItem = document.createElement('div');
      noteItem.className = 'note-item';
      noteItem.textContent = note;
      notesList.appendChild(noteItem);
  });
}


let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  if (category === '') {
      alert('Please select a category');
      return;
  }
  if (isNaN(amount) || amount <=0 ) {
      alert('Please enter a valid amoun')
      return;
  }
  if(date === '') {
      alert('Please select a date')
      return;
  }
  expenses.push({category, amount, date});

  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;

  const newRow = expensesTableBody.insertRow();

  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function() {
      expenses.splice(expenses.indexOf(expense), 1);

      totalAmount -= expense.amount;
      totalAmountCell.textContent = totalAmount;

      expensesTableBody.removeChild(newRow);
  });

  const expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);

});

for (const expense of expenses) {
  totalAmount += expense.amount;
  totalAmountCell.textContent = totalAmount;

  const newRow = expensesTableBody.inserRow();
  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function() {
      expenses.splice(expenses.indexOf(expense), 1);

      totalAmount -= expense.amount;
      totalAmountCell.textContent = totalAmount;

      expensesTableBody.removeChild(newRow);
  });
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}