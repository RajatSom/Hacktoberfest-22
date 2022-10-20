const list = document.querySelector('#list');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = input.value;
    const newLI = document.createElement("li");
    newLI.innerText = text;
    const newbtn = document.createElement('button');
    newbtn.innerText = 'Not Done';
    newbtn.classList.add('dis');
    newbtn.addEventListener('click', (e) => {
        var confirmation = prompt("Do you wanna proceed? Y/y for 'Yes'\nCAUTION: You can't undo the change.");
        if (confirmation === 'y' || confirmation === 'Y') {
            const select = e.target.parentNode;
            select.style.color = "#4eed61";
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#4eed61';
            e.target.innerText = 'Done';
        }
    })
    if (text !== "") {
        newLI.append(newbtn);
        list.append(newLI);
        input.value = "";
    }
})
const btns = document.querySelectorAll('.dis')
for (const btn of btns) {
    btn.addEventListener('click', function java() {
        var confirmation = prompt("Do you wanna proceed? Y/y for 'Yes'\nCAUTION: You can't undo the change.");
        if (confirmation === 'y' || confirmation === 'Y') {
            const text = btn.parentNode;
            btn.style.backgroundColor = 'white';
            btn.style.color = '#4eed61';
            text.style.color = '#4eed61';
            btn.innerText = 'Done';
        }
    })
}