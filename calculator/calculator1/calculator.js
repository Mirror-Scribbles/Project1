// // Este será el contenedor que incluira la información a ser procesada
// const $display = document.querySelector('.display')

// // Aquí recogemos todos los botones disponibles
// const $buttons = document.querySelectorAll('button')

// // console.log($buttons)

// $buttons.forEach((btn) =>{  // Escucharemos la acción del click en cada uno de
// btn.addEventListener('click', () =>{
//     if( btn.id == '=' ){
//     //  Si el botón seleccionado es nuestro '=' procederemos a utilizar eval para resolver el resultado de la operación en pantalla. Más info: 
//     $display.value = eval($display.value);
//     } else if (btn.id === 'ac'){
//         $display.value = ''; 
//     } else if (btn.id === 'de') {
//         $display.value = $display.value.slice(0, -1);
//     }  else{
//         $display.value += btn.id; 

//     }
// }

// )
// })



// part two

const $display = document.querySelector('.display')

const $buttons = document.querySelectorAll('button')


$buttons.forEach((btn) =>{
btn.addEventListener('click', ()=>{
const clickedButton = btn.textContent;

if(btn.id == 'ac'){
    $display.value = '0';
    return
};

if(btn.id == 'de'){
    if($display.value.length === 1 || $display.value === 'Error!' ) {
        $display.value = '0';
    }else{
        $display.value = $display.value.slice(0, -1);
    }
    return
};



if(btn.id === '='){
try {
    $display.value = eval($display.value);
return;

} catch (error) {
    $display.value = 'Error!';
    return
}
};



if($display.value === '0' || $display.value === 'Error!'){
    $display.value  =  clickedButton;
}else{
    $display.value  +=  clickedButton;
};

} )
})