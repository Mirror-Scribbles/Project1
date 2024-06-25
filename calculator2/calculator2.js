const $display1 = document.querySelector('.display1'), $display2 = document.querySelector('.display2');

const $buttons = document.querySelectorAll('button');
console.log($buttons);

const arrayFromButtons = Array.from($buttons)

arrayFromButtons.forEach((btnArray) =>{
btnArray.addEventListener( 'click', ()=>{

    console.log(btnArray.textContent)

    let PressedButton = btnArray.textContent;


    if(PressedButton === 'C'){
        $display2.textContent = '0';
        return 
    }



    if(btnArray.id === '='){
        try {
            $display2.textContent = eval($display2.textContent);
            return
        
        } catch (error) {

            $display2.textContent = '!Error'

            return
        }
        
        }



    if(btnArray.id === 'de'){

        if($display2.textContent.length === 1 || $display2.textContent == '!Error'){
            $display2.textContent = '0';
            
        }else{
            $display2.textContent = $display2.textContent.slice(0, -1);
        }

        return
    }




if ($display2.textContent === '0' || $display2.textContent === '!Error'){
    $display2.textContent = PressedButton;
}else{
    $display2.textContent += PressedButton; 
}


})
})