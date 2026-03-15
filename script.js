const inputbox=document.getElementById("input-box");
const taskcontainer=document.getElementById("task-container");

function addTask(){
    if(inputbox.value==''){
        alert("You must write something!!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        taskcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        

    }
    inputbox.value="";
    saveData();

}
taskcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",taskcontainer.innerHTML);
    
}
function showTask(){
    taskcontainer.innerHTML=localStorage.getItem("data");

}
showTask();