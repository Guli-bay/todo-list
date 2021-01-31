// creating the main container
let main = document.createElement('main')
main.classList.add('container')

// appending the main into body
document.body.prepend(main)

// creating greating text
let projectName = document.createElement('h1')
projectName.innerHTML = "Let's do it"
main.append(projectName)

// creating block for future list
let listBlock = document.createElement('div')
listBlock.className = 'mainBlock'
main.append(listBlock)

// creating a block-parent for creating a new todo
let firstDiv = document.createElement('div')
listBlock.append(firstDiv)

// creating input for new todo
let textIn = document.createElement('input')
textIn.className = "textIn"
textIn.setAttribute('placeholder', 'Gonna do...')
firstDiv.append(textIn)

// creating input with type of date
let setDate = document.createElement('input')
setDate.setAttribute('type', 'date')
firstDiv.append(setDate)

// creating add button
let addBtn = document.createElement('button')
addBtn.innerHTML = 'Add'
addBtn.id = "addBtn"
firstDiv.append(addBtn)

let list = document.createElement('ul')
listBlock.append(list)

let todosArray = localStorage.getItem('todos') == null
     ? []
     : [...JSON.parse(localStorage.getItem('todos'))]

addBtn.addEventListener('click', addTodo)