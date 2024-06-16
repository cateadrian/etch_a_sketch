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


