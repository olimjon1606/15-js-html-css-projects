const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editId = '';

form.addEventListener("submit", addItem)
clearBtn.addEventListener("click", clearItems)

function addItem(e) {
    e.preventDefault();
    const value = grocery.value
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement('article');
        element.classList.add("grocery-item")

        const attr = document.createAttribute('data-id')
        attr.value = id
        element.setAttributeNode(attr)
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>

            <button class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`

        const deleteBtn = element.querySelector(".delete-btn")
        const editBtn = element.querySelector(".edit-btn")
        deleteBtn.addEventListener("click", deleteItem)
        editBtn.addEventListener("click", editItem)

        list.appendChild(element)

        displayAlert("item added to the list", "success")

        container.classList.add("show-container")

        addToLocalStorage(id, value);
        setBackToDefault();

    } else if (value && editFlag) {
        editElement.innerHTML = value
        displayAlert("value changed", "success")
        // editLocalStorage(editId, value)
        setBackToDefault()
    } else {
        displayAlert("please enter a value", "danger")
    }
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    setTimeout(function () {
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');

    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item)
        })
    }
    container.classList.remove("show-container")
    displayAlert("empty list", "danger")

    setBackToDefault()
    localStorage.removeItem("list")
}
function setBackToDefault() {
    grocery.value = ""
    editFlag = false;
    editId = ''
    submitBtn.textContent = "submit"
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    list.removeChild(element)
    if (list.children.length === 0) {
        container.classList.remove("show-container")
    }
    displayAlert("item deleted", "danger")
    setBackToDefault()
    removeFromLocalStorage(id)
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement

    editElement = e.currentTarget.parentElement.previousElementSibling
    grocery.value = editElement.innerHTML
    editFlag = true
    editId = element.dataset.id
    submitBtn.textContent = 'Edit'
}


function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem("list", JSON.stringify(items))
}
function removeFromLocalStorage(id) {
    let items = getLocalStorage()
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    })
localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}