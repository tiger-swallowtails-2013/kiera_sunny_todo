$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


function loadButtons(task) {
  if (document.getElementsByClassName("selected").length > 0)
  {document.getElementsByClassName("selected")[0].setAttribute("class", "selectableTasks")}
  document.getElementById("up_button").style.display = 'inline';
  document.getElementById("down_button").style.display = 'inline';
  document.getElementById(task).setAttribute("class", "selected")
}

function moveUp(){
  var currentTaskId = document.getElementsByClassName("selected")[0].getAttribute("id")
  var currentTaskText = document.getElementById(currentTaskId).innerHTML
  var prevText = document.getElementById(currentTaskId-1).innerHTML
  document.getElementById(currentTaskId-1).innerHTML = currentTaskText
  document.getElementById(currentTaskId-1).setAttribute("class","selected")  
  document.getElementById(currentTaskId).innerHTML = prevText
  document.getElementById(currentTaskId).setAttribute("class","selectableTasks")

}

function moveDown(){
  var currentTaskId = document.getElementsByClassName("selected")[0].getAttribute("id")
  var currentTaskId = parseInt(currentTaskId)
  var currentTaskText = document.getElementById(currentTaskId).innerHTML
  var nextText = document.getElementById(currentTaskId+1).innerHTML
  document.getElementById(currentTaskId+1).innerHTML = currentTaskText
  document.getElementById(currentTaskId+1).setAttribute("class","selected")  
  document.getElementById(currentTaskId).innerHTML = nextText
  document.getElementById(currentTaskId).setAttribute("class","selectableTasks")

}

function getTheTask() {
  

}

// document.getElementById('example').style.borderWidth = '4px';