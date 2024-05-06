let btn = document.querySelector("#calcu");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
   
    let height= document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let result = document.querySelector('#result');

    if(isNaN(height) || height<=0){
        result.innerHTML="Please give a valid Height";

    }
    else if(isNaN(weight) || weight<=0){
        result.innerHTML="Please give a valid weight";

    }
    else{
        let ans = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML= ans;
    }



})
