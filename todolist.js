const inputbox=document.getElementById('input-box');
const listcontainer=document.getElementById('list-container');
function addtask(){
      if(inputbox.value===''){
        alert("you must write tasks!")
      }else{
        let li=document.createElement("li");
        li.textContent=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
      }
      inputbox.value=" ";
      savedata();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName==="SPAN"){
 e.target.parentElement.remove();
 savedata();
    }
},false);

// storing the data in the brower
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

// showing the data when we open the application that shows the same data
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();