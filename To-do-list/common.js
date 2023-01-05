'use strict';
document.querySelector('#push').onclick = function() { //querySelector로 HTMl의 아이디 값을 선택한다. onclick으로 클릭이벤트를 만든다.
  if(document.querySelector('#taskInput').value.length == 0) { // taskinput의 값과 길이를 가져와 0일시 즉 값이 없을시
    alert("할 일을 입력하세요.!")   // alert로 메시지를 만들어 창에 띄운다.
  }else {  //taskinput 안에 값이 있을때

    // HTML의 <div id= tasks></div>안에다 querySelector로 태그 선택을 하고 
    // 베틱으로 태그들을 만들어서 innerHTML을 한다 
    //  ${document.querySelector('#taskInput').value}는
    // value라는 method를 사용해서 #taskInput 값을 불러와 넣는다.
    document.querySelector('#tasks').innerHTML += `
    <div class="task"> 
      <span id="taskname">
        ${document.querySelector('#taskInput').value} 
        </span>
      <button class="delete">
        <i class="far fa-trash-alt"></i>
      </button>
      </div>`;


      //current_tasks라는 지우는 변수를 만든다
      // for문을 통해서 current_tasks 길이가 i보다 클때 즉 값이 있을때 
      // i를 배열로 담고 onclick이라는 method를 사용하고 클릭 이벤트를 만든다.
      // parentNode 사용해 NODE(HTML에 접근을 가능하게 해줌), (parent는 부모를 뜻함) HTML 문서에 접근을 하고 remove라는 메소드를 사용해 지운다.
    var current_tasks = document.querySelectorAll(".delete"); 
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      }
    }
  }
  document.querySelector('#taskInput').value = '';
}