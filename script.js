document.addEventListener("DOMContentLoaded", function() {
    const addExpenseBtn = document.getElementById("add-expense-btn");
    const expensesList = document.getElementById("expenses-list");
    const totalExpense = document.getElementById("total-expense");

    let totalAmount = 0;

    addExpenseBtn.addEventListener("click", function() {
        const description = document.getElementById("expense-description").value;
        const amount = parseFloat(document.getElementById("expense-amount").value);

        if (description.trim() === "" || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid description and amount for the expense.");
            return;
        }

        totalAmount += amount;
        totalExpense.textContent = "Total: ₹" + formatAmount(totalAmount);

        const newExpenseItem = document.createElement("li");
        newExpenseItem.textContent = description + " - ₹" + formatAmount(amount);
        
        // Add delete button to the new expense item
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
            const confirmDelete = confirm("Are you sure you want to delete this expense?");
            if (confirmDelete) {
                totalAmount -= amount;
                totalExpense.textContent = "Total: ₹" + formatAmount(totalAmount);
                newExpenseItem.remove();
            }
        });

        // Append the delete button before appending the new expense item to the list
        newExpenseItem.appendChild(deleteBtn);
        expensesList.appendChild(newExpenseItem);

        document.getElementById("expense-description").value = "";
        document.getElementById("expense-amount").value = "";
    });

    // Function to format amount to 2 decimal places
    function formatAmount(amount) {
        return amount.toFixed(2);
    }
});
