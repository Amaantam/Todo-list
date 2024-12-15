document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if(taskText.length <=0){
            alert("You must write something in your todo ");
        }else {
                const li = document.createElement('li');
                li.textContent = taskText;
                                                                                                                                             
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    taskList.removeChild(li);
                });
    
                li.appendChild(deleteButton);
                taskList.appendChild(li);
                taskInput.value = '';
        }
    });
});