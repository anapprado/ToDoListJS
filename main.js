

document.getElementById("add-task").addEventListener("click", function() {
    const addTask = document.getElementById("new-task").value.trim();
    if ( addTask !== "") {
        task(addTask)
    }
})
    function task (addTask) { 
        const list = document.getElementById("task-list");
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox"
        
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                item.classList.add("completed");
            } else {
                item.classList.remove("completed")    
        }})

        const span = document.createElement('span');
        span.textContent = addTask; // Set the task text in the span

       const button = document.createElement("button")
            button.textContent = "remove"
            button.addEventListener("click", function() {
               list.removeChild(item);
            })

        item.appendChild(checkbox);
        item.appendChild(span); 
        item.appendChild(button);
        list.appendChild(item);

    }