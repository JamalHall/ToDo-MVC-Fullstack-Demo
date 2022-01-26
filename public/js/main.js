const statusSmurf = document.querySelectorAll('.stat')
    Array.from(statusSmurf).forEach(el => {
        el.addEventListener('click', setEvent)})


const deleteSmurf = document.querySelectorAll('.trash')
    Array.from(deleteSmurf).forEach(el => {
        el.addEventListener('click', setEvent)})


function setEvent(event){
    console.log(event.path[0].innerText=='delete')
    let id = this.parentElement.dataset.id
    let status = this.parentElement.childNodes[7].innerText
    let icon = this.parentElement.childNodes[9]
    let name = this.parentElement.childNodes[1].innerText
try {
    if(event.path[0].innerText!=='delete'){
       serverUpdate(id,status)} else serverDelete(id,name)
    } catch (error) {
        console.log(error)
    }    

console.log(id,name,status)
}

serverUpdate = async (id,status) =>{
    const response = await fetch('todos/markStatus',{
        method: 'put',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'todoIdFromMainJSFile': id,
            'status': status
        })        
    })
    const data = await response.json()
    console.log(data)
    location.reload()        
}   

serverDelete = async (id,name) =>{
    const response = await fetch('todos/deleteTodo',{
        method: 'delete',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            'todoIdFromMainJSFile': id,
            'taskName': name
        })        
    })
    const data = await response.json()
    console.log(data)
    location.reload()        
} 