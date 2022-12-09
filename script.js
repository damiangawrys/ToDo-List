let todoInput
let errorInfo
let addBtn
let ulList
let newToDo

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewToDo)
}


const addNewToDo = () => {
    if(todoInput.value !== '') {
        newToDo = document.createElement('li')
        newToDo.textContent = todoInput.value
        ulList.append(newToDo)

        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}


document.addEventListener('DOMContentLoaded', main)
