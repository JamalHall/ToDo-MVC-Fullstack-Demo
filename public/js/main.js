//query event change and variable methods
const statusSmurf = document.querySelectorAll('.stat')
    Array.from(statusSmurf).forEach(el => {
        el.addEventListener('click', setEvent)
        console.log(el.parentElement.childNodes)
        if (el.innerText=='false'){
            el.parentElement.childNodes[9].className = 'icon stat fa fa-circle-notch'
            el.parentElement.childNodes[1].className = ''
            el.parentElement.childNodes[3].className = ''
        } else if (el.innerText=='true') {
            el.parentElement.childNodes[9].className = 'icon stat fa fa-check-circle'
            el.parentElement.childNodes[1].className = 'on'
            el.parentElement.childNodes[3].className = 'on' 
        }
})

const deleteSmurf = document.querySelectorAll('.trash')
    Array.from(deleteSmurf).forEach(el => {
        el.addEventListener('click', setEvent)
})

// Status and Delete higher order function
function setEvent(event){
    console.log(this.innerText=='delete')
    let id = this.parentElement.dataset.id
    let status = this.parentElement.childNodes[7].innerText    
    let name = this.parentElement.childNodes[1].innerText
try {
    if(event.path[0].innerText!=='delete'){
       serverUpdate(id,status)} else serverDelete(id,name)  //conditional to select put or delete method  
    } catch (error) {
        console.log(error)
    }    
console.log(id,name,status)
}

/// put method
const serverUpdate = async (id,status) =>{
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

// delete method
const serverDelete = async (id,name) =>{
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
