const addWork = document.querySelector(".addWork");
const taskContainer = document.getElementById("taskContainer");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateDashboard() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    document.getElementById("totalTasks").textContent = totalTasks;
    document.getElementById("completedTasks").textContent = completedTasks;
    document.getElementById("pendingTasks").textContent = pendingTasks;

    const compliment = document.getElementById("compliment");

    if (totalTasks === 0) {
        compliment.textContent = "Start adding tasks 🚀";
    } else if (completedTasks === totalTasks) {
        compliment.textContent = "🎉 Outstanding! All tasks completed.";
    } else if (completedTasks > 0) {
        compliment.textContent = "🔥 Keep it up!";
    } else {
        compliment.textContent = "💪 Time to get productive!";
    }
}

function renderTasks() {
    taskContainer.innerHTML = "";

    tasks.forEach((taskData, index) => {
        const task = document.createElement("div");
        task.classList.add("task");

        task.innerHTML = `
            <div class="left">
                <input type="checkbox" class="check" ${taskData.completed ? "checked" : ""}>
                <span class="${taskData.completed ? "completed" : ""}">
                    ${taskData.text}
                </span>
            </div>

            <button class="deleteBtn">Delete</button>
        `;

        taskContainer.appendChild(task);

        const checkbox = task.querySelector(".check");
        const text = task.querySelector("span");
        const deleteBtn = task.querySelector(".deleteBtn");

        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;

            if (checkbox.checked) {
                text.classList.add("completed");
            } else {
                text.classList.remove("completed");
            }

            saveTasks();
            updateDashboard();
        });

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
            updateDashboard();
        });
    });
}

addWork.addEventListener("click", () => {
    const input = document.getElementById("inputTask");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task first!");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    renderTasks();
    updateDashboard();

    input.value = "";
});

renderTasks();
updateDashboard();