window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form");

    form.addEventListener("submit",  (event) => {
        handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if (event.preventDefault)  {
        event.preventDefault();
    }
    addItemToShoppingList();
    formRef.reset();
    return false;

}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");
    let id = getRandomNumber();

    let itemHtml = createListItemHtml(itemName, itemAmount, id);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);
    setDeleteButtonEvent(id);

}

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {
        removeListItem(id);
    });

}


function createListItemHtml(itemName, itemAmount, id) {
    return `
<li id="item${id}"> 
    ${itemName.value} - ${itemAmount.value}
    <button id="button${id}" type="button">Delete Item</button>
    </li>`;

}
function removeListItem(id) {
    let listItem = document.getElementById("item"+id);
    listItem.parentNode.removeChild(listItem);
}
function getRandomNumber() {
    return Math.floor(Math.random() * 100000);


}
