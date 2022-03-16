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
const setDone =(obj)=>{
  const li = document.createElement('li')
  const span = document.createElement('span')
  // console.log(temp)
  // temp.map((i)=>{
  //   span.innerText = i.contents
  //   li.id = i.id
  //   li.append(span)
  //   doneList.append(li)
  //   console.dir(doneList.innerText)
  // })
  span.innerText = obj.contents
  li.id = obj.id
  li.append(span)
  doneList.append(li)
}

// 함수 5, delete data both render and localStorage
const del = (e)=>{
  // 1. delete rendering data in yet
  e.target.parentElement.remove()

  // 2. delete localStorage data in yet
  const id = e.target.parentElement.id
  let temp = JSON.parse(localStorage.getItem(yetText))
  temp = temp.filter((i)=> i.id != id)
  localStorage.setItem(yetText, JSON.stringify(temp))
}

// 함수 6, delete data both render and localStorage
const done = (e)=>{
  const id = e.target.parentElement.id
  const text = e.target.parentElement.innerText.slice(4,-1)
  // 1. delete render
  e.target.parentElement.remove()

  // 2.localStorage
  // 2.1. delete yet in localStorage

  const temp = JSON.parse(localStorage.getItem(yetText))
  const yet  = temp.filter((i)=> i.id != id)
  const done = temp.filter(i=>i.id == id)
  localStorage.setItem(yetText, JSON.stringify(yet))
  // console.log(JSON.stringify(done))
  // 2.2. add done in localStorage

  const obj ={
    contents : done[0].contents,
    id : done[0].id
  }
  doneArr.push(obj)
  setDoneLocal(doneArr)

  // 3. render (함수4)
  setDone2()
}

const setDone2 =()=>{
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


// 새로고침했을 때 localStorage 에서 값 가져옴.
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



