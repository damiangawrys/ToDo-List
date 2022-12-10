let todoInput
let errorInfo
let addBtn
let ulList
let newToDo
let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

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
    ulList.addEventListener('click', checkClick)
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
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    tools.append(completeBtn, editBtn, deleteBtn)
}


const checkClick = e => {
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if(e.target.matches('.edit')) {
        console.log('edit');
    } else if(e.target.matches('.delete')) {
        console.log('delete');
    }
}


document.addEventListener('DOMContentLoaded', main)
