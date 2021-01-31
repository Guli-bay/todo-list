const addTodo = () => {
	// value from text input 
	let newTask = textIn.value
	// value from date picker/input
	let date = setDate.value

	// checking for empty string
	if (newTask != '') {
        todosArray.push({
            title: newTask,
            checked: false,
            date,
        })
       
      localStorage.setItem('todos', JSON.stringify(todosArray))
       renderTodoItems()
		// clear inputs (очищает)
        textIn.value = ''
        setDate.value = ''
	}
}

const deleteTodo = (e) => {
  // e.currentTarget.parentNode.remove(e.parentNode)
    let index = parseInt(e.target.parentNode.getAttribute('key'))
    // parseInt - сапты санга айландырат
    //  [1, 2, 3]
    todosArray.splice(index,1) // 1-элементтен баштап 2 элементти очуруп сал дейт  
    // splice() - массивтин ичинде конкретный элементти алыа туруп очуруп салат
    localStorage.setItem('todos',JSON.stringify(todosArray)) // заменяем
    renderTodoItems()
}

const completeTodo = (e) => {
  // checking for 'done' className
  // contains('done') true/false ту кайтарат, текшерет барбы же жокпу
    let todosTemporary = [...todosArray] // копирование

    let index = parseInt(e.target.parentNode.getAttribute('key'))
    // parseInt - сапты санга айландырат
    let objElement = todosTemporary[index].checked // значениени чыгарабыз
    todosTemporary[index].checked = !objElement // (!)- перезапись значение,false/true 

    localStorage.setItem('todos',JSON.stringify(todosTemporary)) // заменяем

    let isDone = e.currentTarget.parentNode.classList.contains('taskItem-done')

      if(isDone) {
          e.currentTarget.parentNode.classList.remove('taskItem-done')
          e.currentTarget.parentNode.classList.add('taskItem')
      } else {
          e.currentTarget.parentNode.classList.add('taskItem-done')
          e.currentTarget.parentNode.classList.remove('taskItem')
      }
}

const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_page=1')
    .then(response => response.json())
    .then(array => {
        console.log(array)
        localStorage.setItem('todos', JSON.stringify(array))
    })
}

getTodos()
