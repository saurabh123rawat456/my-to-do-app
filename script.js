let input = document.getElementById('input');
let addbtn = document.getElementById('addbtn');

function addtask(){
    if(input.value==''){
        alert('Please enter a task');
        return;
    }
    else{
        let list = document.getElementById('task-list');
        let li = document.createElement('li');
        li.innerHTML = `${input.value} <i class="fa-solid fa-trash" onclick="removetask(this)"></i>`;
        input.value = '';
        list.appendChild(li);
    }
}

function removetask(icon){
    let parent = icon.parentElement;
    parent.remove();
}