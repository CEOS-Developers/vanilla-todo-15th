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
