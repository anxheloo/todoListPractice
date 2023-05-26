const btn1 = document.querySelector(".todo-btn1");
const myTextBox = document.querySelector(".todo-input");
const myDate = document.querySelector(".date-input");

const listOfObjects = [];

btn1.addEventListener("click", () => {
  console.log(listOfObjects);
  if (myTextBox.value === "" || myDate.value === "") {
    alert("ToDo or Date is Empty! Enter a todo:");
    myTextBox.value = "";
    myDate.value = "";
  } else {
    const obj = {
      name: myTextBox.value,
      dueDate: myDate.value,
    };

    listOfObjects.push(obj);
    myTextBox.value = "";
    myDate.value = "";
    displayTodos();
  }
});

function displayTodos() {
  // 1.Clear existing todos before displaying the updated list
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.innerHTML = "";

  for (let i = 0; i < listOfObjects.length; i++) {
    //2.create the main div for todo elements
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    // 3.create p tag for the todo text
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-element");
    todoElement.textContent = listOfObjects[i].name;

    // 4.create p tag for the date text
    const dateElement = document.createElement("div");
    dateElement.classList.add("todo-date");
    dateElement.textContent = listOfObjects[i].dueDate;

    // 5.create button tag for the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    // 6.add elements to the main div for todo elements
    todoItem.appendChild(todoElement);
    todoItem.appendChild(dateElement);
    todoItem.appendChild(deleteButton);

    // remove the todo item from the lists
    // display the updated todos
    deleteButton.addEventListener("click", () => {
      let answer;
      do {
        answer = window.prompt("Are you sure (y/n)?");
        while (
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
        listOfObjects.splice(i, 1);
        displayTodos();
      } else {
        return;
      }
    });

    // append the todo item to the todo container
    todoContainer.appendChild(todoItem);
  }
}
