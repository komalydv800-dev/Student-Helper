 console.log("Welcome to Student Helper!");

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    li.style.cursor = "pointer";

    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
function addSubject() {
    let input = document.getElementById("subjectInput");
    let subject = input.value.trim();

    if (subject === "") {
        alert("Please enter a subject!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = subject;

    document.getElementById("subjectList").appendChild(li);

    input.value = "";
}
function addSchedule() {
    let subject = document.getElementById("timeSubject").value.trim();
    let time = document.getElementById("studyTime").value;

    if (subject === "" || time === "") {
        alert("Please enter subject and time!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = subject + " - " + time;

    document.getElementById("scheduleList").appendChild(li);

    document.getElementById("timeSubject").value = "";
    document.getElementById("studyTime").value = "";
}