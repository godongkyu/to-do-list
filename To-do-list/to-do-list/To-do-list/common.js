'use strict';
document.querySelector('#push').onclick = function() { //추가를 누를시
  if(document.querySelector('#taskInput').value.length == 0) { // taskinput 안에 값이 없을때
    alert("할 일을 입력하세요.!")
  }else {  //taskinput 안에 값이 있을때

    // 입력한 값을 노출한다.
    document.querySelector('#tasks').innerHTML += `
    <div class="task"> 
      <span id="taskname">
        ${document.querySelector('#taskInput').value} 
        </span>
      <button class="delete">
        <i class="far fa-trash-alt"></i>
      </button>
      </div>`;

    var current_tasks = document.querySelectorAll(".delete"); // 지울때
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      }
    }
  }
  document.querySelector('#taskInput').value = '';
}