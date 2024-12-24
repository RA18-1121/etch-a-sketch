const container = document.querySelector(".container");

let num = 16;
for(let i = 0; i < num; i++)
{
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < num; j++)
    {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${1 / num * 100}%`;
        box.style.paddingBottom = `${1 / num * 100}%`;

        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "blue";
        })

        row.appendChild(box);
    }
    container.appendChild(row);
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    num = Number(prompt("Enter the size of the new grid (maximum - 100) - "));
    if(num <= 100)
    {
        for(let i = 0; i < num; i++)
        {
            let row = document.createElement("div");
            row.classList.add("row");
            for(let j = 0; j < num; j++)
            {
                let box = document.createElement("div");
                box.classList.add("box");
                box.style.width = `${1 / num * 100}%`;
                box.style.paddingBottom = `${1 / num * 100}%`;
                
                box.addEventListener("mouseenter", () => {
                    box.style.backgroundColor = "blue";
                })
                
                row.appendChild(box);
            }
            container.appendChild(row);
        }
    }
})