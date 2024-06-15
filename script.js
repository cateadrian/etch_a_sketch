let container = document.querySelector("#container");

for(let i = 1; i < 257; i++){
    const div = document.createElement("div");
    div.setAttribute("class","div");
    container.appendChild(div);
    div.addEventListener("mouseenter", function(e){
        let target = e.target;

        target.style.backgroundColor = "black";

    });
};

