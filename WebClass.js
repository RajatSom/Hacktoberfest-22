const btn = document.querySelector('#here');
btn.onclick = function () {
    console.log("YOU CLICKED ME!");
}
function scream() {
    console.log("DON'T HOVER");
}
btn.onmouseenter = scream;
const btn1 = document.querySelector('#here');
btn1.addEventListener('click', function () {
    alert("Work in Progress!");
}, { once: true })
