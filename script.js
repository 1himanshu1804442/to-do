const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");
const addBtn = document.getElementById("add-btn");

// Function to add a new task
function addTask() {
    const taskText = inputBox.value.trim();
    
    if (taskText === '') {
        alert("You must write something!!");
        return;
    }
    
    const li = document.createElement("li");
    li.textContent = taskText;
    
    const span = document.createElement("span");
    span.innerHTML = "\u00d7"; // multiplication sign (×)
    li.appendChild(span);
    
    taskContainer.appendChild(li);
    inputBox.value = "";
    saveData();
}

// Event Listeners for adding tasks
addBtn.addEventListener("click", addTask);

inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Event Listener for toggling completion and deleting tasks
taskContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        const li = e.target.parentElement;
        li.style.opacity = '0';
        setTimeout(() => {
            li.remove();
            saveData();
        }, 300); // Wait for fade out animation if we added one
    }
}, false);

// Save to local storage
function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}

// Load from local storage
function showTask() {
    const data = localStorage.getItem("data");
    if (data) {
        taskContainer.innerHTML = data;
    }
}

showTask();