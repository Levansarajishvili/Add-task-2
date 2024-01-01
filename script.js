let taskColumns = ['toDo', 'progress', 'testing', 'done'];
let taskColors = ['#ff0000', '#eeff00', '#0000ff', '#00ff00'];
let taskElementClasses = ['name', 'description', 'assignee'];
let tasksList = [];
let currentId = 0;


function addTask() {
    let taskName = document.getElementById('task_name').value;
    let taskDesc = document.getElementById('task_description').value;
    let taskAssign = document.getElementById('task_assignee').value;
    let taskStatus = Number(document.getElementById('task_status').value);
    let fields = [taskName, taskDesc, taskAssign];

    if (fieldValuesAreValid(fields)) {
        let createdTask = createTaskElement(fields, taskStatus);
        document.getElementById(taskColumns[taskStatus]).children[1].appendChild(createdTask);
    } else {
        alert('pleae fill out the form');
    }
}

function createTaskElement(taskInfo, status) {
    let currentElement = document.createElement('div');
    currentElement.className = 'task';
    currentElement.style = 'background-color:' + taskColors[status];
    currentElement.id = currentId;
    currentId += 1;


   // ['support', 'connect cables', 'cotne']
    for (let i = 0; i < taskInfo.length; i++) {
        let childElement = document.createElement('div');
        childElement.innerHTML = taskInfo[i];
        childElement.className = taskElementClasses[i];
        currentElement.appendChild(childElement);
    }

    let iconChild = document.createElement('img');
    iconChild.className = 'icon';
    iconChild.src = 'delete.png';
    // iconChild.addEventListener('click', function() {
    //     currentElement.remove();
    //     iconChild.removeEventListener('click');
    // });

    iconChild.setAttribute('onClick', 'deleteTask('+currentElement.id+')');
    console.log(iconChild);

    currentElement.appendChild(iconChild);

    return currentElement;
}

function fieldValuesAreValid(fields) {
    for (let val of fields) {
        if (val === '') {
            return false;
        }
    }
    return true;
}


function deleteTask(elementId) {
    // console.log('elementId', elementId);
    // console.log('elementId', elementId.parentNode);
    // let toDelete = elementId.parentNode.id;
    // console.log('toDelete', toDelete);
    document.getElementById(elementId).remove();
}
