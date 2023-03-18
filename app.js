let btns = document.querySelectorAll("button")
// console.log(btns);
let result = document.querySelector("textarea")
// console.log(result);
let Enter = document.getElementById("Enter")
// console.log(Enter);
let Capslock = document.getElementById("Capslock")
// console.log(Capslock);
let Backspoace = document.getElementById("Backspoace")
// console.log(Backspoace);
let Space = document.getElementById("Space")
// console.log(Space);
let Shift = document.getElementById("Shift")
// console.log(Shift);
let binsspan = document.querySelectorAll("#bispan")
console.log(binsspan);
let spans = document.querySelectorAll("span")
// console.log(spans);

for (let i = 0; i < btns.length; i++) {
    // console.log(btns[i]);
    btns[i].addEventListener("click",(e)=>{
        if (btns[i].innerHTML !== "Backspoace" 
        && btns[i].innerHTML !== "Capslock" 
        && btns[i].innerHTML !== "Space"
        && btns[i].innerHTML !== "Ctrl"
        && btns[i].innerHTML !== "Fn"
        && btns[i].innerHTML !== "Alt"
        && btns[i].innerHTML !== "Shift"
        && btns[i].innerHTML !== "AltGr"
        && btns[i].innerHTML !== "PrtSc")
         {
            result.value += btns[i].innerText 
        }
        // console.log(e.target);
        
        
    })

    Capslock.addEventListener("click",()=>{
        if(btns[i].innerHTML !== "Backspoace" && btns[i].innerHTML !== "AltGr" 
         && btns[i].innerHTML !== "PrtSc"
         && btns[i].innerHTML !== "Ctrl" 
         && btns[i].innerHTML !== "Shift" 
         && btns[i].innerHTML !== "Fn"
         && btns[i].innerHTML !== "Ctrl"
         && btns[i].innerHTML !== "Alt"
         && btns[i].innerHTML !== "Enter"
         && btns[i].innerHTML !== "Capslock"){
            btns[i].classList.toggle('upper')
        }
    })
    
}

Backspoace.addEventListener("click",()=>{
    // console.log(e.target);
    result.value = result.value.slice(0, -1);
})

Enter.addEventListener("click", ()=>{
    result.value = "";
})

Space.addEventListener("click", ()=>{
    // alert ("hii")
    result.value +=` `; 
})

