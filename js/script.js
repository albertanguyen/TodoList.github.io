/* */

let masterTodoList = []

const clearTodoInput = () => document.getElementById('userInput').value = ''
const clearOldTodoLists = () => document.getElementById('todoList').innerHTML = ''

const addTodoToList = () => {
    const newTodo = {
        isDone: false,
        createdAt: new Date(),
        body: document.getElementById('userInput').value
    }
    masterTodoList.push(newTodo)
}

const renderTodoLists = () => {
    if (masterTodoList.length === 0) document.getElementById('todoList').innerHTML = ''
    let html = ''
    // element.body get the todo information from body attribute within each element
    // masterTodoList[idx] get the object element only
    // element.body = masterTodoList[idx].body
    masterTodoList.map((element, idx) => {
        const textnode = `<li>${element.body} <a href='#' onclick='removeTodoItem(${idx})'>x</a></li>\n`;
        //    const textnode = `<li>${element.body} <a href='#' onclick='removeTodoItem(${idx})'>x</a></li>\n`;  
        const node = html += textnode // asign html updated by textnode to node
        //    const node += textnode; 
        //     html += textnode
        document.getElementById('todoList').innerHTML = node
        //    console.log(textnode);    
    })
    console.log(html);
}

const removeTodoItem = selectedTodoIdx => {
    masterTodoList = masterTodoList.filter((_, idx) => idx !== selectedTodoIdx);
    //  renderTodoLists()
}

const onClickTitle = () => updateTitle()

const updateTitle = () => {
    document.getElementById('titleContainer').innerHTML = ''
    document.getElementById("titleContainer").innerHTML = `<input id="todoTitle"></input>`
    document.getElementById('todoTitle').focus()
    //  let newtitle = document.getElementById('todoTitle').value
    //document.getElementById('todoTitle').innerText = 
}


//const Completed = array => array.filter(element => element.isDone)   

const onButtonClick = () => {
    clearOldTodoLists()
    addTodoToList()
    clearTodoInput()
    renderTodoLists()
}