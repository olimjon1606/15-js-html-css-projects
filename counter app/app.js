let counter = 0

const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")) {
            counter--
        } else if (styles.contains("increase")) {
            counter++
        } else {
            counter = 0
        }
        if (counter > 0)
            value.style.color = "green"
        else if (counter < 0)
            value.style.color = "red"
        else
            value.style.color = "#000"
        value.textContent = counter

    })
})

console.log(btns)