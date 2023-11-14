let inp=document.querySelector("input");
let btn = document.querySelector("button");
let imgA = document.querySelector(".img1");
let imgB = document.querySelector(".img2");
let imgC = document.querySelector(".img3");
let ul = document.querySelector("ul");
let x=document.querySelector('.divUl')


imgB.addEventListener("mouseover", (e) => {
    if (imgB.src !== "./imagess/Group 56.svg") {
        imgB.src = "./imagess/Group 70.svg "
    }
})

imgB.addEventListener("mouseout", (e) => {
    if (imgB.src == "./imagess/Group 70.svg") {
        imgB.src = "./imagess/ Group 56.svg"
    }
    else {
        imgB.src = "./imagess/Group 56.svg"
    }
})


btn.addEventListener("click", (event) => {
  
    if (inp.value.trim()=== '') {
        if(inp.style.display!=="none"){
            alert("Write Something")
            inp.style.display="none"
        }
      
    }
    else {
        let li = document.createElement("li");
        let imgElement = document.createElement("img");
        imgElement.src = "./imagess/Group 56.svg"
        imgElement.addEventListener("mouseover", () => {
            imgElement.src = "./imagess/Group 70.svg";
        });
        imgElement.addEventListener("mouseout", () => {
            imgElement.src = "./imagess/Group 56.svg";
        });
        
        li.innerText = inp.value;
        imgElement.classList.add('imgelement');
        li.classList.add("classLi");
        li.append(imgElement);
        ul.append(li);
        inp.value = " ";
    }
})

btn.addEventListener("click", () => {
x.classList.remove('d-none')
    if (inp.style.display == "none") {
        inp.style.display = "block";
        imgB.style.display="block"
    } else {
        inp.style.display = "none";
        imgB.style.display="none"
    }
    
});

ul.addEventListener("click", function (e) {
    if (e.target.classList.contains('imgelement')) {
        e.target.parentElement.remove();
    }
});

imgB.addEventListener("click",function(e) {
     inp.value="";
    })

  imgA.addEventListener("mouseover",(e)=>{
        if(imgA.src!=="./imagess/Group 74.svg"){
        imgA.src="./imagess/Group 73.svg"
    }
   })
   imgA.addEventListener("mouseout",(e)=>{
    if(imgA.src == "./imagess/Group 73.svg"){
        imgA.src="./imagess/Group 74.svg"
    }
    else{
        imgA.src="./imagess/Group 74.svg"
    }
   })
   imgC.addEventListener("mouseover",()=>{
    if(imgC.src!=="./imagess/Group 90.svg"){
    imgC.src="./imagess/Group 91.svg"
}
})
imgC.addEventListener("mouseout",()=>{
if(imgC.src=="./imagess/Group 91.svg"){
    imgC.src="./imagess/Group 90.svg"
}
else{
    imgC.src="./imagess/Group 90.svg"
}
})



imgA.addEventListener("click", () => {
    sortListAlphabetically();
});

function sortListAlphabetically() {
    const list = ul;
    const items = Array.from(list.getElementsByTagName("li"));

    items.sort((a, b) => {
        return a.innerText.localeCompare(b.innerText);
    });

    items.forEach((item) => list.appendChild(item));
}
imgC.addEventListener("click", () => {
    sortListReverseAlphabetically();
});

function sortListReverseAlphabetically() {
    const list = ul;
    const items = Array.from(list.getElementsByTagName("li"));

    items.sort((a, b) => {
        return b.innerText.localeCompare(a.innerText);
    });

    items.forEach((item) => list.appendChild(item));
}

console.log(imgC)
console.log(imgA)