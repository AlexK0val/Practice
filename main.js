/*document.getElementById("delete1").onclick = function(e1) {
    document.getElementById("acting1").value = "";
}

document.getElementById("delete2").onclick = function(e2) {
    document.getElementById("acting2").value = "";
}

document.getElementById("delete3").onclick = function(e3) {
    document.getElementById("acting3").value = "";
}

document.getElementById("delete4").onclick = function(e4) {
    document.getElementById("acting4").value = "";
}

document.getElementById("delete5").onclick = function(e5) {
    document.getElementById("acting5").value = "";
}

document.getElementById("delete6").onclick = function(e6) {
    document.getElementById("acting6").value = "";
}*/

/*let array = [];

function onClickButton(inputValue) {
    array.push(inputValue);
}

array.forEach(element => {
    document.getElementById(acting1).innerHTML = value
});

let array = JSON.parse(localStorage.getItem(array)) || [];

function addToDo (inputValue) {
    array.push(inputValue);
}*/

/*function getInput() {
    return localStorage.getItem("ToDoString");
}
  
function myFunc() {
    var str = getInput();
    document.getElementById("uList").innerHTML = str;
}
  
function onClickButton() {
    // Gets input value
    var str = document.getElementById("acting1").value;
  
    // Saves data to retrieve later
    localStorage.setItem("ToDoString", str);
    
    // Updates HTML
    myFunc();
}*/

/*var taskInput = document.getElementById('acting');
var addTaskButton = document.getElementById('submit');
var incompleteTasks = document.getElementById('toDo');


var addTask = function () {
    var text = taskInput.value;
    var li = document.createElement('li');
    li.innerHTML = text;
    incompleteTasks.appendChild(li);
}

addTaskButton.onclick = addTask;

function addCheckBox() {
    var ChecksAvailable = function() {}
    var ChecksAvailable = document.getElementById('checkBoxes');
    var check_value = new Array();
    check_value[0] = "";

    var check, br;

   for(var check in check_value)
    {
        check=document.createElement("input");   
        check.type="checkbox";
        check.id="check";
        br=document.createElement("br");
        ChecksAvailable.appendChild(check);
        ChecksAvailable.appendChild(br);
   }
}*/

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Видалити");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Ви нічого не написали!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Видалити");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



