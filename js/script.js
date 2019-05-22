let masterTodoList = []

/* Get Input*/
const AddTodo = () => {
    const Todoitem = {
        createAt: new Date(),
        isDone: false,
        content: document.getElementById('UserInput').value
    };
    masterTodoList.push(Todoitem);
    saveTodoList(masterTodoList)
}


const clearUserInput = () => document.getElementById('UserInput').value = ''
const clearOldTodoLists = () => document.getElementById("UserTodoList").innerHTML = ''
const TodoList = () => JSON.parse(localStorage.getItem('UserTodoList'))
const saveTodoList = TodoList => localStorage.setItem('UserTodoList', JSON.stringify(TodoList))


const TodoListRender = () => {
    if (masterTodoList.length === 0) document.getElementById('UserTodoList').innerHTML = ''
    let html = '';
    masterTodoList.map( (element,idx) => {
        const htmlnode = `<li class='text-left'><a href='#' onclick='removeTodoItem(${idx})' style='color: #F2A900;'>${
          element.content
        }</a></li>\n`; 
        const jsnode = html += htmlnode; 
        document.getElementById("UserTodoList").innerHTML = jsnode;
    });
}

const removeTodoItem = selectedItemIdx => {
    masterTodoList = masterTodoList.filter( (_, idx) => idx !== selectedItemIdx)
    TodoListRender()
}


function validate(e) {
  var text = e.target.value;
  document.getElementById("titleContainer").innerHTML = text;
}

const ChangeTitle = () => {
    document.getElementById("titleContainer").innerHTML = "";
    document.getElementById("titleContainer").innerHTML = `<input id="todoTitle"></input>`;
    document.getElementById("todoTitle").focus();
    const todotitle  = document.getElementById("todoTitle");
    todotitle.addEventListener("keydown", function(e) {
      if (e.keyCode === 13) {
        validate(e);
      }
    });
};


const main = () => {
  clearOldTodoLists();
  AddTodo();
  clearUserInput();
  TodoListRender();
};

