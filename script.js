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


// 사용한 함수들에 대한 기능명세는 다음과 같음.

// 함수1, setValue in localStorage
const setYetLocal =(arr)=>{
  localStorage.setItem(yetText, JSON.stringify(arr))
}
// 함수2, setValue in localStorage
const setDoneLocal = (arr)=>{
  localStorage.setItem(doneText, JSON.stringify(arr))
}


// 함수3, render in yetList
const setYet = (obj)=>{
  // DOM 조작(생성)
  const li = document.createElement('li')
  const span = document.createElement('span')
  const btn = document.createElement('button')
  const btn2 = document.createElement('button')
  span.innerText = obj.contents
  btn.innerText = 'del'
  btn2.innerText = 'Done'
  li.id = obj.id
  li.append(btn2)
  li.append(span)
  li.append(btn)
  yetList.append(li) // dom 삽입
  // del , done 처리
  btn.addEventListener('click', del)
  btn2.addEventListener('click', done)
}

// 함수4, render in doneList
const setDone =()=>{
  const li = document.createElement('li')
  const span = document.createElement('span')
  const temp = JSON.parse(localStorage.getItem(doneText))
  temp.map((i)=>{
    span.innerText = i.contents
    li.id = i.id
    li.append(span)
  })
  doneList.append(li)
}

