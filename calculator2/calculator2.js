

const $display1 = document.querySelector('.display1'), $display2 = document.querySelector('.display2');

const $buttons = document.querySelectorAll('button');
console.log($buttons);

const arrayFromButtons = Array.from($buttons);


arrayFromButtons.forEach((btn) =>{
    btn.addEventListener('click', () => {

console.log(btn.textContent)

let button = btn.textContent;

if(btn.id === 'C'){
    $display2.textContent = 0;
    return
}


if(btn.id === '='){
    try {
        $display2.textContent = eval($display2.textContent);
    } catch (error) {
        $display2.textContent = 'operating error!'
    }

return 
}




if(btn.id === 'de'){

    if($display2.textContent.length === 1 || $display2.textContent === 'operating error!'){
        $display2.textContent = 0;
    }else{
        $display2.textContent = $display2.textContent.slice(0, -1);
    }
    return

}



if(btn === '0' || $display2.textContent === 'operating error!' ){
$display2.textContent = button;
}else{
    $display2.textContent += button;
}

    })
})