const btn1 = document.querySelector(".todo-btn1");
const myTextBox = document.querySelector(".todo-input");
const myDate = document.querySelector(".date-input");

todoList = [];
myDateList = [];

btn1.addEventListener("click", () => {
  if (myTextBox.value === "" || myDate.value === "") {
    alert("ToDo or Date is Empty! Enter a todo:");
    myTextBox.value = "";
    myDate.value = "";
  } else {
    todoList.push(myTextBox.value);
    myDateList.push(myDate.value);
    myTextBox.value = "";
    myDate.value = "";
    displayTodos();
  }
});

function displayTodos() {
  // 1.Clear existing todos before displaying the updated list
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.innerHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    //create the main div for todo elements
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    // create p tag for the todo text
    const todoElement = document.createElement("p");
    todoElement.classList.add("todo-element");
    todoElement.textContent = todoList[i];

    // create p tag for the date text
    const dateElement = document.createElement("p");
    dateElement.classList.add("todo-date");
    dateElement.textContent = myDateList[i];

    // create button tag for the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    // add elements to the main div for todo elements
    todoItem.appendChild(todoElement);
    todoItem.appendChild(dateElement);
    todoItem.appendChild(deleteButton);

    // remove the todo item from the lists
    // display the updated todos
    deleteButton.addEventListener("click", () => {
      let answer;
      do {
        answer = window.prompt("Are you sure (y/n)?");
        if (
          answer !== "yes" &&
          answer !== "no" &&
          answer !== "y" &&
          answer !== "n" &&
          answer !== "Yes" &&
          answer !== "YES" &&
          answer !== "No" &&
          answer !== "NO"
        ) {
          answer = window.prompt("Enter a correct answer (y/n):");
        }
      } while (
        answer !== "yes" &&
        answer !== "no" &&
        answer !== "y" &&
        answer !== "n" &&
        answer !== "Yes" &&
        answer !== "YES" &&
        answer !== "No" &&
        answer !== "NO"
      );

      if (
        answer === "yes" ||
        answer === "y" ||
        answer === "Y" ||
        answer === "YES"
      ) {
        todoList.splice(i, 1);
        myDateList.splice(i, 1);
        displayTodos();
      } else {
        return;
      }
    });

    // append the todo item to the todo container
    todoContainer.appendChild(todoItem);
  }
}

const listOfObjects = {
  name: "",
  dueDate: "",
};
