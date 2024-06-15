const $display1 = document.querySelector('.display1'), $display2 = document.querySelector('.display2');

const $buttons = document.querySelectorAll('button');
console.log($buttons)

const arrayFromButtons = Array.from($buttons)

arrayFromButtons.forEach((btnArray) =>{
btnArray.addEventListener( 'click', ()=>{

if(btnArray.id === 'C'){
    $display2.textContent = '0';

    return 
}
btnArray.textContent === '0' ?  $display2.textContent += btnArray.textContent : 




})
})