let container = document.querySelector("#container");

function makeGrid(n){ 
    for(let i = 1; i < (n*n) + 1; i++){
        const div = document.createElement("div");
        div.setAttribute("class","div");
        div.style.flex = `0 0 ${100/(n)}%`;
        container.appendChild(div);

        div.addEventListener("mouseenter", function(e){
             let target = e.target;

             target.style.backgroundColor = "black";
         });
    };
}

// Having more than 50 makes the computer really slow
// Initializes a grid 16x16
makeGrid(16);

function removeGrid(){
    let oldDivs = document.querySelectorAll(".div");

    oldDivs.forEach((div) => {
        div.remove();
    });
}

let resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", function(){
    let userInput = prompt("How many sqaures per side? ");
    removeGrid();
    makeGrid(userInput);
});

