const createItem = (todo, id) => {
    let item = `
        <li
            key="${id}"
            class=${todo.checked ? 'taskItem-done' : 'taskItem'}>
                ${todo.title} ${todo.date ? todo.date : ''}
                <img class="btn" src="check-icon.png" onclick="completeTodo(event)"/>
                <img class="btn" src="delete-icon.png" onclick="deleteTodo(event)"/>
        </li>
`
        
    return item
}

const renderTodoItems =  () => {
    list.innerHTML = ''
    let items = []
    
    todosArray.length 
       ?  todosArray.map((todo, id) => {
            items.unshift(createItem(todo,id))
            list.innerHTML = items.join('')
    }) 
        : list.prepend('Учурда тапшырма жок')
}

renderTodoItems()
