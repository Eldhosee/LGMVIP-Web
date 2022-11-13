task=document.getElementById("task")
button1=document.getElementById("button")
container2=document.getElementById('container_2')
delete_button=document.getElementsByClassName('delete')
button1.addEventListener('click',function () {
    if(task.value==''){
        alert("Enter the Task");
    }
    else{
        var para=document.createElement('p')
        var button2=document.createElement('button')
        para.innerHTML=task.value
        button2.innerHTML="delete"
        button2.className="delete"
        container2.append(para);
        para.append(button2);
    }

})

container2.addEventListener('click',function(e){
  var para_remove=e.target.parentNode;
  container2.removeChild(para_remove);
})