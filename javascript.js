const container = document.querySelector(".container");
for(let i = 0; i < 16; i++)
{
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < 16; j++)
    {
        let box = document.createElement("div");
        box.classList.add("box");

        let text = document.createElement("div");
        text.classList.add("text");
        text.textContent = "Hello";
        box.appendChild(text);

        row.appendChild(box);
    }
    container.appendChild(row);
}