const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
    const left = dodger.style.left.replace("px", "");
    const leftnum = parseInt(left, 10);

    if (leftnum > 0){
        dodger.style.left = `${leftnum - 1}px`
    }
}


function moveDodgerRight(){
    const right = dodger.style.left.replace("px", "");
    const rightNum = parseInt(right, 10)

    if(rightNum <= 360){
        dodger.style.left = `${rightNum + 1}px`
    }
}




document.addEventListener("keydown", (events) =>{ 
    if (events.key === "ArrowLeft"){
        moveDodgerLeft();
    }

     if (events.key === "ArrowRight"){
        moveDodgerRight();
    }
});


