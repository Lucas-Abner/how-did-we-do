let btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
  btn.addEventListener("click", activeButton);
});

function activeButton(e) {
    const clickedBtn = e.target;

    btns.forEach(function(btn) {
        if (btn !== clickedBtn) {
          btn.classList.remove("active");
        }
    });

    if(!clickedBtn.classList.contains("active")){
        clickedBtn.classList.add("active");
    }else{
        clickedBtn.classList.remove("active");
    }

    returnValue(clickedBtn);
}

function returnValue(clickedBtn){
    let submit = document.querySelector(".button");
    let btnValue = clickedBtn.innerHTML;

    submit.addEventListener("click", ()=>{
        if(clickedBtn !== ""){
            document.querySelector("#card-thank").style.display = "flex";
            document.querySelector("#card").style.display = "none";
            document.querySelector(".card-select").innerHTML = `You selected <span>${btnValue}</span> out of 5` 
        }
    })
}