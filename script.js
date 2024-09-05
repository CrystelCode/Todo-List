let list = document.getElementById('list');

document.getElementById("addTask").style.display = "none";

function addTask() {
    let newTask = document.getElementById('newTask').value;

    if (newTask === "") {
        alert("Please fill out the form");
    } else {
        let entry = document.createElement('li');

        // Add the task text
        entry.appendChild(document.createTextNode(newTask));

        // Add the checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        entry.appendChild(checkbox);

        // Add the delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            list.removeChild(entry); // Remove the task when the button is clicked
        };
        entry.appendChild(deleteButton);

        // Add the entry to the list
        list.appendChild(entry);

        // Clear the input field and hide the task form
        document.getElementById('newTask').value = "";
        document.getElementById("addTask").style.display = "none";
    }
}

function showTaskForm() {
    document.getElementById("addTask").style.display = "block";
}
