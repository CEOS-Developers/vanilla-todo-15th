// ====== html 요소 변수 선언  ======= //

const form = document.querySelector(".formControl");
const formInput = document.querySelector(".formInput");
const submitBtn = document.querySelector(".submitBtn");
const todoList = document.querySelector(".todoList");
const doneList = document.querySelector(".doneList");
const todoCountField = document.querySelector(".todoCount");
const doneCountField = document.querySelector(".doneCount");

// form | form 요소
// formInput | form 입력 영역 요소
// submitBtn | form 내 등록 버튼
// todoList | todoItem 가지는 list container
// doneList | doneItem 가지는 list container
// todoCountField, doneCountField | 각 count 값 가지는 text container

// ====== 초기화시 실행 동작 ======= //

window.addEventListener("DOMContentLoaded", () => {
  updateCnt();
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      if (item.value.type === "todo") {
        createTodoItem(item.id, item.value.text);
      } else if (item.value.type === "done") {
        createDoneItem(item.id, item.value.text);
      }
    });
  }

  // LocalStorage에서 Item을 불러오고, 비어있는 경우 예외
});

// ===== 등록 이벤트핸들러, Item 수 추적 ===== //

form.addEventListener("submit", addTodo);

function updateCnt() {
  todoCountField.textContent = todoList.children.length;
  doneCountField.textContent = doneList.children.length;
}

// ====== Todo, Done List 조작 관련 함수들 ======= //

function addTodo(e) {
  e.preventDefault();
  const value = formInput.value;
  const id = new Date().getTime().toString();

  if (value !== "") {
    createTodoItem(id, value);
    addToLocalStorage(id, { text: value, type: "todo" });
  }

  formInput.value = "";
  updateCnt();

  // Form에서 넘어온 값이 공백인 경우 넘기기
  // Unique ID를 생성하기 위해 등록시점의 시간을 사용 (millisecond 단위)
}

function moveToDone(e) {
  const todoItem = e.currentTarget.parentElement;
  const id = todoItem.getAttribute("id");
  const itemText = todoItem.textContent.slice(0, -3);

  todoList.removeChild(todoItem);
  editLocalStorage(id, { text: itemText, type: "done" });

  createDoneItem(id, itemText);
  updateCnt();

  // button 기준 parentELement = doneItem
  // Unique ID를 기준으로 localStorage 수정
}
function moveToTodo(e) {
  const doneItem = e.currentTarget.parentElement;
  const id = doneItem.getAttribute("id");
  const itemText = doneItem.textContent.slice(0, -3);

  //textContent로 불러올 시 "  \n"이 더해지는 현상이 있어 slice로 처리

  doneList.removeChild(doneItem);
  editLocalStorage(id, { text: itemText, type: "todo" });

  createTodoItem(id, itemText);
  updateCnt();

  // button 기준 parentELement = todoItem
  // Unique ID를 기준으로 localStorage 수정
}
