let plusButton = document.querySelector(".plus");
let addWork= document.querySelector(".addWork");

    addWork.addEventListener("click", () => {
        let inputTask = document.querySelector("#inputTask").value.trim();
         if(inputTask!== ""){
 let list = document.createElement("div");
list.classList.add('listStyle');
list.textContent = inputTask;       // text(work toDo mention here, taken from input)
let checkbox = document.createElement("input"); //creating checkbox
checkbox.type="checkbox";
checkbox.classList.add("check");
list.appendChild(checkbox); // append checkbox here
let deleteBtn = document.createElement("img"); // creating delete image
deleteBtn.src="./deleteBtn.png";
deleteBtn.classList.add("delBtn");  
list.appendChild(deleteBtn);       // appending delete btn on the list div
list.style.marginTop = "1rem";
document.body.appendChild(list);

document.querySelector("#inputTask").value="";

checkbox.addEventListener("click", ()=>{    //checkbox work
list.style.opacity="0.5";
});                        // closed function of checkbox function

deleteBtn.addEventListener("click", ()=>{  //delete btn work
   list.remove();
});  // function of delete btn closed here
         } //if loop closed here
         else{
            alert("enter the work first");  // alert is given when there is nothing in input
         }
    });



// DASHBOARD
let totalTasksCount = 0;
let completedTasksCount = 0;

function updateDashboard() {
    totalTasksCount = addWork.length;
    completedTasksCount = addWork.filter(task => task.completed).length;

    document.getElementById('totalTasks').innerText = `Total Tasks: ${totalTasksCount}`;
    document.getElementById('completedTasks').innerText = `Completed Tasks: ${completedTasksCount}`;

    let compliment = " ";
    if (completedTasksCount === totalTasksCount && totalTasksCount > 0) {
        compliment = "Outstanding!";
    } else if (completedTasksCount > 0) {
        compliment = "Keep it up!";
    }
    document.getElementById('compliment').innerText = compliment;
}

// Call updateDashboard() whenever a task is added or completed
btn.addEventListener("click", function() {
    // Existing code to add a task
    updateDashboard(); // Update dashboard after adding a task
});



