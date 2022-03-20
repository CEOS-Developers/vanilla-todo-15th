const colors = [
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59"
  
    ];

  
    let firstColor = colors[Math.floor(Math.random() * colors.length)];
    let secondColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.background = `linear-gradient(${firstColor}, ${secondColor})`;
   
    const toDoButton = document.getElementById("todo-button");
    const toDo = document.getElementById("todo");
    const toDoList = document.getElementById("todo-list");
    const toDoInfo = document.getElementById("todo-info");
    const doneList = document.getElementById("done-list");
    const doneInfo = document.getElementById("done-info");
    const finishtoDo = document.getElementById("finish-todo");
    
    var toDoNum = 0;
    var doneNum = 0;

    function finish(){
        if(toDoNum === 0){
          finishtoDo.classList.remove("hidden");
    
        }
    
        else{
          finishtoDo.classList.add("hidden");
        }
    
       
      }

    function deleteToDo(event) {
        toDoNum--;
        toDoInfo.innerText =`(${toDoNum})`;
        
        const deletetoDoList = event.target.parentElement;
        deletetoDoList.remove();
      
        finish();

        }

        function moveToDo(event) {
            deleteToDo(event);
            
            const removeList = document.createElement("div");
            const removeItem = event.target;
            const deleteButton = document.createElement("span");
            deleteButton.innerText = "❌";
           
            removeList.style.color ="grey";
            
            removeList.appendChild(removeItem); 
            removeList.appendChild(deleteButton);
            doneList.appendChild(removeList);
        
        
            doneNum++;
            doneInfo.innerText =`(${doneNum})`;
        
            deleteButton.addEventListener("click", trashDoneToDo);
        
          }

          function trashDoneToDo(event) {
            const li = event.target.parentElement;
            li.remove(); 
            
            doneNum--;
            doneInfo.innerText =`(${doneNum})`;
        
          }

     function toDoInput(){
        const newTodo = toDo.value;
        toDo.value = "";
        makeToDo(newTodo);
    
      }
    
      function makeToDo(newTodo) {
        toDoNum++;
        toDoInfo.innerText = `(${toDoNum})`;
        
        const li = document.createElement("div");
        const toDoItem = document.createElement("span");
        const deleteButton = document.createElement("span");
        
        li.style.margin= "10px"; 
        
        toDoItem.innerText = newTodo;
        deleteButton.innerText = "❌";
        
        li.appendChild(toDoItem); 
        li.appendChild(deleteButton);
        toDoList.appendChild(li);
        
        toDoItem.addEventListener("click", moveToDo);
        deleteButton.addEventListener("click", deleteToDo);

        finish();
    
      }

      toDoButton.addEventListener("click", toDoInput);
 