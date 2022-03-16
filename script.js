// DOM 조작(검색)
const form = document.querySelector('#input-form')
const input = document.querySelector('#input-form input')
const yetList = document.querySelector('#yet-list')
const doneList = document.querySelector('#done-list')

// 텍스트는 변수로 설정 => 오타 방지 및 수정 용이
const yetText = 'yetList'
const doneText = 'doneList'

// for localStorage
let yetArr = []
let doneArr = []

// form submit
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const val = input.value
  input.value = ''
  const obj = {
    contents : val,
    id : Date.now()
  }
  yetArr.push(obj)
  //함수3 사용 render in yetList
  setYet(obj)
  //함수1 사용 setValue in localStorage
  setYetLocal(yetArr)
})

if(localStorage.getItem(yetText)){
  const temp = JSON.parse(localStorage.getItem(yetText))
  yetArr = temp
  // 함수3 사용 for rendering
  temp.forEach(i=> setYet(i))
}

if(localStorage.getItem(doneText)){
  const temp = JSON.parse(localStorage.getItem(doneText))
  DoneArr = temp
  // 함수4 사용 for rendering
  temp.forEach(i=> setDone(i))
}


