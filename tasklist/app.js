const collection = document.querySelector(".collection input");
const sub = document.getElementById("submit");
const tasks = document.querySelector(".tasks");
const form = document.querySelector("form")
const deleteBtn = document.querySelector(".delete i")
const Tasks = collection.value
sub.addEventListener("click", store)
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearLS)
function clearLS(){
  localStorage.clear()
}
function addTask(e){
    if(collection.value.trim() ==""){
       alert("Add a task");
       e.preventDefault()
    } 
    else {
       tasks.innerHTML += `<li class='task'>${collection.value} 
         <button class="btn delete mb-3 mt-1"><i class="fa-solid fa-trash"></i></button>
       </li>`;
       
       collection.value = ""       
       e.preventDefault()
    }
}
 form.addEventListener("submit",
  addTask)

 tasks.addEventListener("click", deletetask);
tasks.addEventListener("click",cross);
tasks.addEventListener("dblclick",uncross)
document.addEventListener("DOMContentLoaded",myFunction)
function deletetask(e) {
  if(e.target.parentElement.classList.contains('delete')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
      RemoveTask(e.target.parentElement.parentElement) 

      function RemoveTask(){
          let local = collection.value
const work = JSON.parse(localStorage.getItem("TASKS")) || [];
  work.push(local);
   localStorage.setItem("TASKS",JSON.stringify(work));
   {
    

   }
      }
    }
  }
}
function cross(e){
  if(e.target.style.textDecoration == "none"){
      e.target.style.textDecoration = "line-through";
  }   
   console.log(e)
}
function uncross(e){
  if (e.target.style.textDecoration = "linethrough"){
    e.target.style.textDecoration = "none" ;
    
  } 
}

function store(e){ 
  let local = collection.value
const work = JSON.parse(localStorage.getItem("TASKS")) || [];
  work.push(local);
   localStorage.setItem("TASKS",JSON.stringify(work));
}
 function myFunction(){
  let local = collection.value
let work = JSON.parse(localStorage.getItem("TASKS")) || [];
  work.push(local);
   localStorage.setItem("TASKS",JSON.stringify(work));
  work.forEach(function (task) {
    if(task.trim()==""){   
      
    }
    else {
  tasks.innerHTML += `<li class='task'>${task} 
         <button class="btn delete mb-3 mt-1"><i class="fa-solid fa-trash"></i></button>
       </li>`; }
   } 
  )
}

