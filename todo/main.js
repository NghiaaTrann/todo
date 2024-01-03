// tạo một mảng danh sách để hứng những dữ liệu nhập vào
var todoList = [];

// Load todoList from localStỏage
$(document).ready(function() {
  var json = localStorage.getItem('todoList')
  if(json != null){
    todoList = JSON.parse(json)
  }
  render()
});

// lưu lại sau khi tắt tab

window.addEventListener('beforeunload', function(e){
  this.localStorage.setItem('todoList', JSON.stringify(todoList))
});

var todoList = new Array();

function addTodo() {
  let domTask = document.getElementById("task");
  let domtimeBegin = document.getElementById("timeBegin");
  let domtimeEnd = document.getElementById("timeEnd");

  let taskName = domTask.value;
  let timeBegin= domtimeBegin.value;
  let timeEnd = domtimeEnd.value;

  var todo = {
    taskName: taskName,
    timeBegin:timeBegin,
    timeEnd: timeEnd
  };

  todoList.push(todo);

  render();
//   console.log(todoList);
   taskInput.value = "";
   timeBeginInput.value = "";
   timeEndInput.value = "";
}

function render() {
  let domTodoList = document.getElementById("todoList");
  let htmlTodoList = "";
  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i];
    htmlTodoList +=
      `<tr>` +`<th scope="row">` +(i + 1) +`</th>` +
      `<td>` + todo.taskName +`</td>` +
      `<td>` + todo.timeBegin+ `</td>` +
      `<td>` + todo.timeEnd+ `</td>` +
      `<td><input type="checkbox" checked></td>
       <td class="primary"><button onclick="editTask(${i})">Sửa</button></i></td>
       <td class="danger"><button onclick="deleteTask(${i})">Xóa</button></td>
    </tr>`;
  }

  domTodoList.innerHTML = "";
  domTodoList.innerHTML = htmlTodoList;
}
function editTask(index) {
    let todo = todoList[index];

  let newTaskContent = prompt("Nhập nội dung công việc mới:");
  let newtimeBegin = prompt("Nhập ngày bắt đầu mới:", todo.timeBegin);
  let newtimeEnd = prompt("Nhập ngày kết thúc mới:", todo.timeEnd);
  if (newTaskContent!== null && newtimeBegin !== null && newtimeEnd !== null) {
    todo.taskName = newTaskContent;
    todo.timeBegin = newtimeBegin;
    todo.timeEnd = newtimeEnd;

    render();
  }
}
function deleteTask(index) {
  todoList.splice(index, 1);
  render();
}
render();
