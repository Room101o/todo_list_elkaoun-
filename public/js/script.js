//todo liste number 1
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
        list.appendChild(li);
        li.setAttribute("class", "tkharbi9a")
        //? create p
        let p = document.createElement("p");
        p.textContent = input.value;
        li.appendChild(p);
        //? create icon
        let icon = document.createElement("i");
        icon.innerHTML = '<i class="fa-solid verif fa-check" value="done" style="color: #42f312;"></i> <i class="fa-solid update fa-pen-to-square" ></i>';    
        li.appendChild(icon);
        icon.style.display="flex";
        icon.style.flexDirection ="row";
        icon.style.gap ="50px";
        icon.style.alignItems ="center";
        //? create span
        let spane = document.createElement("span");
        spane.innerHTML = "x";
        li.appendChild(spane);
        spane.style.display="flex";
        spane.style.justifyContent ="50px";
        spane.style.alignItems ="center";

       

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
        e.target.parentElement.parentElement.classList.toggle("edit");
        let pro = prompt("jjdheModifier la valeur :");
        e.target.parentElement.previousElementSibling.textContent = pro;
    }
})

//todo liste number 2
//^^Function changeStatus
document.addEventListener("click", change=(element) =>{




})
