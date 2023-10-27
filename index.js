// let currentCount = localStorage.getItem('count') ? localStorage.getItem('count') : 0


// const wrapper = document.getElementById('count')
// const incrementBtn = document.createElement('button')
// const incrementBtn = document.createElement('button')
// const count = document.createElement('p')

// incrementBtn.innerText = 'Increment'
// incrementBtn.innerText = 'Decrement'
// count.innerText = currentCount
// wrapper.appendChild(count)
// wrapper.appendChild(incrementBtn)
// wrapper.appendChild(decrementBtn)
// const changeCount = (changeType) => {
//   let result = changeType === 'incr' ? currentCount++ : currentCount--
//   count.innerText = result
//   localStorage.setItem('count', result)
// }
// incrementBtn.addEventListener('click', () => {
//   changeCount('incr')
// })
// decrementBtn.addEventListener()


const toDoList = []
const initialValue = localStorage.getItem('myToDo')
const toDoList = localStorage.getItem('myToDo') ? JSON.parse(localStorage.getItem('myToDo')) : []
const addToDoForm = document.getElementById('addToDo')
const inPrograssListWrapper = document.getElementById('incopleteToDo')
const completeToDoWrapper = document.getElementById('completeToDo')
const listWrapper = document.getElementById('todoList')
const formInput = document.getElementById('toDoTitle')
const formDescription = document.getElementById('toDoDescription')

const addListItem = (arr, parrent) => {
  const listTitle = document.createElement('div')
  const listCheck = document.createElement('input')
  const wrapper = document.createElement('div')
  const toDoDescription = document.createElement('div')
  const devider = document.createElement('br')
  wrapper.classList.add('toDoWrapper')
  listCheck.setAttribute('type', 'checkbox')
  arr.forEach((item) => {
    listTitle.innerText = item.title
    parrent.appendChild(listCheck)
    parrent.appendChild(listItem)
    listCheck.addEventListener('click', (event) => {
      if (event.target.checked) {
        completeToDo.appendChild(listCheck)
        completeToDo.appendChild(listItem)
      } else {
        incopleteToDo.appendChild(listCheck)
        incopleteToDo.appendChild(listItem)
      }
    })
  })
}
const changeToDoStatus = (event, child, parrent) => {
  parrent.appendChild(child)
}

addListItem(toDoList, incopleteToDo)

const addToDo = (event) => {
  event.preventDefault()
  const data = new FormData(event.target)
  const toDo = Object.fromEntries(data.entries())
  toDoList.push(toDo)
  localStorage.setItem('myToDo', JSON).stringify()
  addListItem(toDoList, listWrapper)
  formTitle.value = ''
  formDescription.value ''

}
addToDoForm.addEventListener('submit', addToDo)