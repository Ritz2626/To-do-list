document.querySelector("#push").onclick=function()
{
    if(document.querySelector('#newtask input').value.length==0)
    alert('Please enter a task');
    else{
        document.querySelector('#tasks').innerHTML+=
        `<div class="task">
        <span id="taskname">${document.querySelector('#newtask input').value}</span>    
        <button class="delete">
        <i class="fa fa-trash"></i>
        </button>
        </div>`;
        let current_tasks=document.querySelectorAll(".delete");
        console.log(current_tasks);
        for(i=0;i<current_tasks.length;i++)
        {
            current_tasks[i].onclick=function()
            {
                this.parentNode.remove();

            }
        }
        let task_list=document.querySelectorAll('.task');
        for(let i=0;i<task_list.length;i++)
        {
            task_list[i].onclick=function()
            {
                this.classList.toggle('completed');
            }

        }
        document.querySelector('#newtask input').value="";

    }
}