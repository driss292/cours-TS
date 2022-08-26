"use strict";
const itemsContainer = document.querySelectorAll(".items-container");
// Initialisation
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
//Boucle sur chaque container
itemsContainer.forEach((container) => {
    addContainerListener(container);
});
// Ajouter Event à une variable
function addContainerListener(currentContainer) {
    // récupération de chaque btn
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn");
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn");
    const currentCloseFormBtn = currentContainer.querySelector(".close-form-btn");
    const currentForm = currentContainer.querySelector("form");
    // Ajout de l'évenement
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListener(currentAddItemBtn);
    closingFormBtnListener(currentCloseFormBtn);
    addFormSubmitListener(currentForm);
    addDDListener(currentContainer);
}
// Fonctions EventListener
function deleteBtnListeners(btn) {
    btn.addEventListener("click", handleContainerDeletion);
}
function addItemBtnListener(btn) {
    btn.addEventListener("click", handleAddItem);
}
function closingFormBtnListener(btn) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        toogleForm(actualBtn, actualForm, false);
    });
}
function addFormSubmitListener(form) {
    form.addEventListener("submit", createNewItem);
}
function addDDListener(element) {
    element.addEventListener("dragstart", handleDragStart);
    element.addEventListener("dragover", handleDragOver);
    element.addEventListener("drop", handleDrop);
    element.addEventListener("dragend", handleDragEnd);
}
// Fonctions d'ACTION
function handleContainerDeletion(e) {
    e.preventDefault();
    // Cibler event au btn
    const btn = e.target;
    const btnsArray = [...document.querySelectorAll(".delete-container-btn")];
    const containers = [...document.querySelectorAll(".items-container")];
    containers[btnsArray.indexOf(btn)].remove();
}
function handleAddItem(e) {
    const btn = e.target;
    if (actualContainer)
        toogleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toogleForm(actualBtn, actualForm, true);
}
function toogleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
// Attribution
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector("ul");
    actualForm = actualContainer.querySelector("form");
    actualTextInput = actualContainer.querySelector("input");
    actualValidation = actualContainer.querySelector(".validation-msg");
}
function createNewItem(e) {
    e.preventDefault();
    // Validation
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        actualValidation.textContent = "";
    }
    // Création Item
    const itemContent = actualTextInput.value;
    const li = `
    <li class="item" draggable="true">
    <p>${itemContent}</p>
    <button>X</button>
    </li>
    `;
    actualUL.insertAdjacentHTML("beforeend", li);
    const item = actualUL.lastElementChild;
    const liBtn = item.querySelector("button");
    handleItemDeletion(liBtn);
    addDDListener(item);
    actualTextInput.value = "";
}
function handleItemDeletion(btn) {
    btn.addEventListener("click", () => {
        const elToRemove = btn.parentElement;
        elToRemove.remove();
    });
}
// Drag and Drop
let dragSrcEl;
function handleDragStart(e) {
    var _a;
    e.stopPropagation();
    if (actualContainer)
        toogleForm(actualBtn, actualForm, false);
    dragSrcEl = this;
    (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/html", this.innerHTML);
}
function handleDragOver(e) {
    e.preventDefault();
}
function handleDrop(e) {
    var _a;
    e.stopPropagation();
    const receptionEl = this;
    // Si LI et container vide
    if (dragSrcEl.nodeName === "LI" && receptionEl.classList.contains("items-container")) {
        receptionEl.querySelector("ul").appendChild(dragSrcEl);
        addDDListener(dragSrcEl);
        handleItemDeletion(dragSrcEl.querySelector("button"));
    }
    if (dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text/html");
        if (this.classList.contains("items-container")) {
            addContainerListener(this);
            this.querySelectorAll("li").forEach((li) => {
                handleItemDeletion(li.querySelector("button"));
                addDDListener(li);
            });
        }
        else {
            addDDListener(this);
            handleItemDeletion(this.querySelector("button"));
        }
    }
}
function handleDragEnd(e) {
    e.stopPropagation();
    if (this.classList.contains("items-container")) {
        addContainerListener(this);
        this.querySelectorAll("li").forEach((li) => {
            handleItemDeletion(li.querySelector("button"));
            addDDListener(li);
        });
    }
    else {
        addDDListener(this);
    }
}
// Add New Container
const addContainerBtn = document.querySelector(".add-container-btn");
const addContainerForm = document.querySelector(".add-new-container form");
const addContainerFormInput = document.querySelector(".add-new-container input");
const validationNewContainer = document.querySelector(".add-new-container .validation-msg");
const addContainerCloseBtn = document.querySelector(".close-add-list");
const addNewContainer = document.querySelector(".add-new-container");
const containersList = document.querySelector(".main-content");
addContainerBtn.addEventListener("click", () => toogleForm(addContainerBtn, addContainerForm, true));
addContainerCloseBtn.addEventListener("click", () => toogleForm(addContainerBtn, addContainerForm, false));
addContainerForm.addEventListener("submit", createNewContainer);
function createNewContainer(e) {
    e.preventDefault();
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        validationNewContainer.textContent = "";
    }
    const itemsContainer = document.querySelector(".items-container");
    const newContainer = itemsContainer.cloneNode();
    const newContainerContent = `
                <div class="top-container">
                    <h2>${addContainerFormInput.value}</h2>
                    <button class="delete-container-btn">X</button>
                </div>
                <ul></ul>
                <button class="add-item-btn">Add an item</button>
                <form autocomplete="off">
                    <div class="top-form-container">
                        <label for="item">Add a new item</label>
                        <button class="close-form-btn">X</button>
                    </div>
                    <input type="text" id="item" />
                    <span class="validation-msg"></span>
                    <button type="submit">Submit</button>
                </form>
            
    `;
    newContainer.innerHTML = newContainerContent;
    containersList.insertBefore(newContainer, addNewContainer);
    addContainerFormInput.value = "";
    addContainerListener(newContainer);
}
