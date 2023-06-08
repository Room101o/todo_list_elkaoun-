//! Declaration variables 
let input = document.querySelector(".input");
let btn_list = document.querySelector(".btn_list");
let list = document.querySelector(".container ul");
//! function 
btn_list.addEventListener("click",(e)=>{
    if (input.value != "") {
        e.preventDefault();
        //^^Add element
        //? create li
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        //? create icon
        let icon = document.createElement("i");
        icon.innerHTML = '<i class="fa-solid verif fa-circle" style="color: #51aa08;"></i> <i class="fa-solid update fa-pen-to-square"></i>';
        
        li.appendChild(icon);
        //? create span
        let spane = document.createElement("span");
        spane.innerHTML = "x";
        li.appendChild(spane);
    }

    //^^Remove element
    let close = document.querySelectorAll("span");
    
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", ()=>{
            close[i].parentNode.style.display = "none";
        })
    }
    //^^
    input.value = "";
});

//^^^Verifier Element
document.addEventListener("click", e =>{
    if (e.target.className.includes("verif")) {
        // console.log(e.target);
        e.target.parentElement.parentElement.classList.toggle("green");
    }
})

//^^Update Element
document.addEventListener("click", e =>{
    if (e.target.className.includes("update")) {
        // console.log(e.target);
        e.target.parentElement.parentElement.classList.toggle("green");
    }
})
