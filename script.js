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
   
    const toDoButton = document.getElementById("toDoButton");
    const toDo = document.getElementById("toDo");

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
    
      }

      toDoButton.addEventListener("click", toDoInput);
 