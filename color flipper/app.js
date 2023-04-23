const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomN = getRandom()
    document.body.style.backgroundColor = colors[randomN];
    color.textContent = colors[randomN]
    console.log(randomN);
})

function getRandom() {
    return Math.floor(Math.random() * 4)
}