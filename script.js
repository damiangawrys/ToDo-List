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
        createToolsArea()
        
        ulList.append(newToDo)


        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}


const createToolsArea = () => {
    const tools = document.createElement('div')
    tools.classList.add('tools')
    newToDo.append(tools)
    
    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-check"></i>'

    tools.append(completeBtn, editBtn, deleteBtn)
}


document.addEventListener('DOMContentLoaded', main)
