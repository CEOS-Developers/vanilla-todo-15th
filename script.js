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

