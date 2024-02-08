let inputBox=document.querySelector('input');
let buttons=document.querySelectorAll('button');

let string='';

Array.from(buttons).forEach((item)=>{
    item.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.innerText =='='){
            string=string == ''?'0':string;
        
        try{
            string=eval(string);
            inputBox.value=string;
        }
        catch(error){
inputBox.value="Error"
        }
    }
    else if(e.target.innerText=='AC'){
        string='';
        inputBox.value=string;
    }
    else if(e.target.innerText=='Del'){
        string=string.toString().slice(0,-1);
        inputBox.value=string;
    }
    else{
        string=string+e.target.innerText;
       inputBox.value=string;
    }
    })
})