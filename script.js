function setupSearch() {
    const searchInput = document.querySelector(".toDoSearch input[type='text']");
    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const tasks = document.querySelectorAll(".toDoList .toDoItem");
        
        tasks.forEach(function(task) {
            const taskText = task.textContent.toLowerCase();
            if (taskText.includes(searchTerm)) {
                task.style.display = "flex"; // Exibir a tarefa se corresponder à pesquisa
            } else {
                task.style.display = "none"; // Ocultar a tarefa se não corresponder à pesquisa
            }
        });
    });
}

function showTheTask(inputValue) {
    var toDoList = document.querySelector("#toDoList2");
    var label = document.createElement("label");
    label.classList.add("toDoItem");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var taskText = document.createElement("div");
    taskText.textContent = inputValue;

    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "X";
    deleteButton.addEventListener("click", function() {
        
        deleteTask(label);
    });

    label.appendChild(checkbox);
    label.appendChild(taskText);
    label.appendChild(deleteButton);
    toDoList.appendChild(label);
}

function deleteTask(taskElement) {
    taskElement.remove();
}

document.addEventListener("DOMContentLoaded", function() {
    getTheInputValue();
    setupSearch();
});

const openModal = document.querySelector("#button");
const apply = document.querySelector(".apply");
const cancel = document.querySelector(".cancel");
const modalContainer = document.querySelector(".modalContainer");
const body = document.querySelector("body");
const getWhiteTheme = document.querySelector(".getWhiteTheme");

function getTheInputValue() {
    apply.addEventListener("click", () => {
        var inputValue = document.querySelector("#secondInput").value;
        if (inputValue.trim() !== "") {
            showTheTask(inputValue);
            document.querySelector("#secondInput").value = "";    
            modalContainer.classList.remove("show");
        } else {
            alert("Por favor, insira uma tarefa antes de adicionar.");
        }
    });
}

openModal.addEventListener("click", () => {
    modalContainer.classList.add("show");
});

cancel.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});
