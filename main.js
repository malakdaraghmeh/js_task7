const btn =document.querySelectorAll("button");
const span =document.querySelectorAll("span");
const coun =[0, 0, 0, 0];
for(let i=0;i<span.length;i++){
    btn[i].onclick = () =>{
        coun[i]++;
        span[i].textContent=coun[i];
    };
}

