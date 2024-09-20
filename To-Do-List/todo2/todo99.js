
const D = document;

D.addEventListener('loaded', () =>{ 
const $Form  = document.querySelector('.form-div');
const $taskInput = document.querySelector('.input-todo');
const $listItems = document.querySelector('.todo-list');



$Form.addEventListener('submit', (e) => {
    e.preventDefault();

    $taskInput.addEventListener('submit', () =>{
    e.preventDefault();
    })

    const task = $taskInput.value;

    if (!task) {

return; 

    }

console.log($taskInput.value)




const liElement = document.createElement('li')
        liElement.classList('todo-li')
        liElement = input.value;

        $listItems.appendChild(liElement);


})



});
