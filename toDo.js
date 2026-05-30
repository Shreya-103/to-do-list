const addWork = document.querySelector(".addWork");
const taskContainer = document.getElementById("taskContainer");

let totalTasks = 0;
let completedTasks = 0;

function updateDashboard() {

    document.getElementById("totalTasks").textContent = totalTasks;
    document.getElementById("completedTasks").textContent = completedTasks;
    document.getElementById("pendingTasks").textContent =
        totalTasks - completedTasks;

    let compliment = document.getElementById("compliment");

    if(totalTasks === 0){
        compliment.textContent = "Start adding tasks 🚀";
    }
    else if(completedTasks === totalTasks){
        compliment.textContent = "🎉 Outstanding! All tasks completed.";
    }
    else if(completedTasks > 0){
        compliment.textContent = "🔥 Keep it up!";
    }
    else{
        compliment.textContent = "💪 Time to get productive!";
    }
}

addWork.addEventListener("click", () => {

    const input = document.getElementById("inputTask");
    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Enter a task first!");
        return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    task.innerHTML = `
        <div class="left">
            <input type="checkbox" class="check">
            <span>${taskText}</span>
        </div>

        <button class="deleteBtn">Delete</button>
    `;

    taskContainer.appendChild(task);

    totalTasks++;
    updateDashboard();

    input.value = "";

    const checkbox = task.querySelector(".check");
    const text = task.querySelector("span");

    checkbox.addEventListener("change", () => {

        if(checkbox.checked){
            text.classList.add("completed");
            completedTasks++;
        }
        else{
            text.classList.remove("completed");
            completedTasks--;
        }

        updateDashboard();
    });

    const deleteBtn = task.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", () => {

        if(checkbox.checked){
            completedTasks--;
        }

        totalTasks--;

        task.remove();
        updateDashboard();
    });
});

updateDashboard();