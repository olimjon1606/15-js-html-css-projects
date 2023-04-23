const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
    let hexFinal = "#";
    function randomN() {
        const randomN = Math.floor(Math.random() * 16);
        return randomN
    }
    for (i = 0; i < 6; i++) {
        hexFinal +=hex[randomN()];
    }
document.body.style.backgroundColor = hexFinal
color.textContent = hexFinal

})