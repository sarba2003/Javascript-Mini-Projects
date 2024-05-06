let buttons = document.querySelectorAll("button");
        let  body=document.querySelector("body");
       

       buttons.forEach((mychange)=>{
    
       mychange.addEventListener('click',(e)=>{
        
        if(e.target.id=='gray'){
            body.style.backgroundColor='gray';
        }
        else if(e.target.id=='black'){
            body.style.backgroundColor='black';
        }
        else if(e.target.id=='blue'){
            body.style.backgroundColor='blue';
        }
        else if(e.target.id=='yellow'){
            body.style.backgroundColor='yellow';
        }

    })
   

})