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
// let binsspan = document.qublockerySelectorAll("#bispan")
// console.log(binsspan);
let spans = document.querySelectorAll("span")
// console.log(spans);
let fistdiv = document.querySelectorAll(".divtwo")
// console.log(fistdiv);
let tamildiv = document.getElementById("tamildiv")
// console.log(tamildiv);
let tamil = document.getElementById("tamil")
// console.log(tamil);
let eng = document.getElementById("eng")

let tamiltext = document.querySelector("#tamiltext")
// console.log(tamiltext);

let specialchar = document.querySelector('.specialchar')
let divone = document.querySelector(".divone")
// console.log(divone);
// console.log(english);
let main =document.querySelector(".main")
// console.log(main);
let main1 =document.querySelector(".main1")

let tamilbtn = document.querySelectorAll(".tamilbtn")
// console.log(tamilbtn);

// window.addEventListener("keyup",(e)=>{
//     // console.log(e.key);

//     result.append(e.key)
// })
window.addEventListener("keyup", function (e) {
    console.log(e.key);
})


for (let i = 0; i < btns.length; i++) {
    // console.log(btns[i]);
    btns[i].addEventListener("click",(e)=>{
        if (btns[i].innerHTML !== "Backspace" 
        && btns[i].innerHTML !== "Capslock" 
        && btns[i].innerHTML !== "Space"
        && btns[i].innerHTML !== "Ctrl"
        && btns[i].innerHTML !== "Fn"
        && btns[i].innerHTML !== "Alt"
        && btns[i].innerHTML !== "Shift"
        && btns[i].innerHTML !== "AltGr"
        && btns[i].innerHTML !== "PrtSc"
        && btns[i].innerHTML !== "தமிழ்"
        && btns[i].innerHTML !== "eng")
         {
            result.value += btns[i].innerText 
        }
        // console.log(e.target);
    })

    Capslock.addEventListener("click",()=>{
        if(btns[i].innerHTML !== "Backspace" && btns[i].innerHTML !== "AltGr" 
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
    result.value = "\n";
})

Space.addEventListener("click", ()=>{
    // alert ("hii")
    result.value +=` `; 
})

Shift.addEventListener("click",(e)=>{
    // alert ("hii")
        specialchar.classList.toggle('show')
        divone.classList.toggle('none')
})


tamil.addEventListener("click",()=>{
    // alert("ki")
    main.style.display ="none"
    main1.style.display="block"
})
eng.addEventListener("click",()=>{
    main.style.display="block"
    main1.style.display="none"
})


for(let j =0; j<tamilbtn.length;j++){
    // console.log(tamilbtn[j]);
    tamilbtn[j].addEventListener("click",(e)=>{
        // console.log(e.target);
        if(tamilbtn[j].innerHTML !== "eng"){
            tamiltext.value += tamilbtn[j].innerText
        }
        
    })
}

let tamilBackspoace = document.getElementById("tamilBackspoace")
tamilBackspoace.addEventListener("click",()=>{
    // console.log(e.target);
    tamiltext.value = tamiltext.value.slice(0, -1);
})

let tamilEnter = document.getElementById("tamilEnter")

tamilEnter.addEventListener("click", ()=>{
    tamiltext.value = "\n";
})
