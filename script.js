const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoInputBtn = document.querySelector(".todo-input").querySelector("div");
const toDoListPre = document.querySelector(".todo-list-pre");
const toDoListDone = document.querySelector(".todo-list-done");

let toDoList = [];
let indPre = 0;
let indDone = 0;

const createToDo = (event) => {
  event.preventDefault();

  const toDoObj = {
    done: false,
    text: toDoInput.value,
    id: indPre + 1,
  };

  drawToDo(toDoObj);
  toDoInput.value = "";
  indPre += 1;

  saveListCache();
};

const drawToDo = (toDoObj) => {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.addEventListener("click", toggleToDo);
  span.innerHTML = toDoObj.text;
  li.appendChild(span);

  const delButton = document.createElement("img");
  delButton.src = "img/ios_trash.png";
  delButton.addEventListener("click", deleteToDo);
  li.appendChild(delButton);

  li.id = toDoObj.id;

  if (toDoObj.done === false) {
    toDoListPre.appendChild(li);
    document.getElementById("pre").innerHTML =
      Number(document.getElementById("pre").innerHTML) + 1;
  } else {
    toDoListDone.appendChild(li);
    document.getElementById("done").innerHTML =
      Number(document.getElementById("pre").innerHTML) + 1;
  }
};

const deleteToDo = (event) => {
  const { target } = event;
  const li = target.parentNode;
  const done = li.parentNode.className == "todo-list-done";

  if (!done) {
    toDoListPre.removeChild(li);
    document.getElementById("pre").innerHTML =
      Number(document.getElementById("pre").innerHTML) - 1;
  } else {
    toDoListDone.removeChild(li);
    document.getElementById("done").innerHTML =
      Number(document.getElementById("pre").innerHTML) - 1;
  }

  saveListCache();
};

const toggleToDo = (event) => {
    event.preventDefault();
    
  const { target } = event;
  const li = target.parentNode;
  const done = li.parentNode.className == "todo-list-done";

  if (!done) {
    toDoListPre.removeChild(li);
    toDoListDone.appendChild(li);
    document.getElementById("pre").innerHTML =
      Number(document.getElementById("pre").innerHTML) - 1;
    document.getElementById("done").innerHTML =
      Number(document.getElementById("done").innerHTML) + 1;
    indDone += 1;
  } else {
    toDoListDone.removeChild(li);
    toDoListPre.appendChild(li);
    document.getElementById("pre").innerHTML =
      Number(document.getElementById("pre").innerHTML) + 1;
    document.getElementById("done").innerHTML =
      Number(document.getElementById("done").innerHTML) - 1;
    indPre += 1;
  }

  saveListCache();
};

const saveListCache = () => {
  saveList = [];

  saveList.push(
    Number(document.querySelectorAll(".todo-list-pre > li > span").length)
  );
  for (let toDoObj of document.querySelectorAll(".todo-list-pre > li > span")) {
    saveList.push(toDoObj["innerHTML"]);
  }

  for (let toDoObj of document.querySelectorAll(
    ".todo-list-done > li > span"
  )) {
    saveList.push(toDoObj["innerHTML"]);
  }

  localStorage.setItem("toDoListCache", JSON.stringify(saveList));
};

const loadListCache = () => {
  const loadedToDoList = localStorage.getItem("toDoListCache");

  console.log(loadedToDoList);

  const lenPre = Number(loadedToDoList[0]);

  for (let index = 0; index < lenPre; index++) {
    drawToDo({
      done: false,
      text: loadedToDoList[index],
      id: indPre + 1,
    });
    indPre += 1;
  }
  for (let index = lenPre; index < loadedToDoList.length; index++) {
    drawToDo({
      done: true,
      text: loadedToDoList[index],
      id: indDone + 1,
    });
    indDone += 1;
  }
};

const setClock = () => {
  var today = new Date();
  var hh = addZero(today.getHours());
  var mm = addZero(today.getMinutes());
  var YY = today.getFullYear();
  var MM = today.getMonth() + 1;
  var DD = today.getDate();

  document.getElementById("time").innerHTML = hh + ":" + mm;
  document.getElementById("date").innerHTML =
    YY + "년 " + MM + "월 " + DD + "일" + "  " + hh + ":" + mm;
};

const addZero = (num) => (num < 10 ? "0" + num : "" + num);

const init = () => {
  loadListCache();
  setClock();
  setInterval(setClock, 1000);

  toDoForm.addEventListener("submit", createToDo);
  toDoInputBtn.addEventListener("click", createToDo);
};

init();
