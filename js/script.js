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

/* Capture mouse's movement*/

document.onmousemove = mouseMove; 
function mouseMove(ev){
  ev = ev || window.event; 
  var mousePos = mouseCoords(ev);
} 

function mouseCoords(ev){
  if(ev.pageX || ev.pageY) {
    return {x:ev.pageX, y:ev.pageY};
  }
  return {
    x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
    y:ev.clientY + document.body.scrollTop  - document.body.clientTop
  };}

document.onmouseup = mouseUp;
var dragObject     = null; 
function makeClickable(object) {
  object.onmousedown = function() {
    dragObject = this;
  } 
} 

function mouseUp(ev){
  dragObject = null; 
}

function makeDraggable(item){
  if(!item) return;
  item.onmousedown = function(ev) {
    dragObject  = this;
    mouseOffset = getMouseOffset(this, ev);
    return false;
  } 
} 


const main = () => {
  clearOldTodoLists();
  AddTodo();
  clearUserInput();
  TodoListRender();
};

