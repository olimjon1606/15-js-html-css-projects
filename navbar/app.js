const navToggleEl = document.querySelector(".nav-toggle")
const links = document.querySelector(".links");

navToggleEl.addEventListener("click", function () {
    console.log(links.classList);

    // if (links.classList.contains("links")) {
    //     links.classList.remove("show-links")
    // } else {
    //     links.classList.add("show-link")
    // }
    links.classList.toggle("show-links")
})