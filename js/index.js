// let todoList = [];
// let doneList = [];
let beiWang = "";
let todoInner;

window.onload = function () {
  let text1 = document.getElementById("beiwang");
  let todo = document.getElementById("todo");
  if ((beiWang = window.localStorage.getItem("beiWang"))) {
    console.log(beiWang);
    text1.innerHTML = beiWang;
    todo.innerHTML = window.localStorage.getItem("todoInner");
  }
  // 添加事项
  let add = document.getElementById("button");
  add.onclick = function () {
    let li = document.createElement("li");
    let radio = document.createElement("a");
    // let p = document.createElement("p");
    let shanchu = document.createElement("a");
    li.setAttribute("class", "task");
    radio.setAttribute("href", "#");
    radio.setAttribute("class", "wancheng");
    shanchu.setAttribute("href", "#");
    shanchu.setAttribute("class", "delete");
    let inputValue = document.getElementById("input").value;
    if (inputValue == "") {
      alert("请输入要添加的事项");
    } else {
      //   todoList.push(li);
      let text = document.createTextNode(inputValue);
      li.appendChild(radio);
      li.appendChild(text);
      todo.appendChild(li);
      li.appendChild(shanchu);
      //   todoList.push(li);
    }
  };
  // 完成

  // 删除
  todo.onmousemove = function () {
    let tasks = document.querySelectorAll("a.delete");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function remove() {
        tasks[i].parentNode.remove();
        // todoList.pop(tasks[i].parentNode);
      };
    }
    let clickTasks = document.querySelectorAll("a.wancheng");
    for (let i = 0; i < clickTasks.length; i++) {
      clickTasks[i].onclick = function click() {
        clickTasks[i].parentNode.setAttribute("class", "clickedTask");
        clickTasks[i].setAttribute("class", "clickedWancheng");
      };
    }

    let clickedTasks = document.querySelectorAll("a.clickedWancheng");
    for (let i = 0; i < clickedTasks.length; i++) {
      clickedTasks[i].onclick = function clicked() {
        clickedTasks[i].parentNode.setAttribute("class", "task");
        clickedTasks[i].setAttribute("class", "wancheng");
      };
    }
    // 备忘录文字改变时自动保存
    text1.onchange = function () {
      beiWang = text1.value;
      console.log(beiWang);
    };
  };

  // 页面关闭时保存数据
  window.onbeforeunload = function () {
    localStorage.setItem("beiWang", beiWang);
    // localStorage.setItem("todoList", todoList);
    todoInner = todo.innerHTML;
    todoInner = todoInner = localStorage.setItem("todoInner", todoInner);
    // localStorage.setItem("doneList", doneList);
  };
};
