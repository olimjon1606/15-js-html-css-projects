const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
    const colorPick = []
    function randomN() {
        const randomN = Math.floor(Math.random() * 16);
        return randomN
    }

    for (i = 0; i < 6; i++) {
        colorPick.push(hex[randomN()]);
    }
    const hexFinal = "#" + colorPick.join("")
    document.body.style.backgroundColor = hexFinal
    color.textContent = hexFinal

})