console.log("hello does this work");
let list = document.querySelector("#shopping-list");
let input = document.querySelector("#input");
function addToShoppingList() {
    let shoppingList = input.value;
    if (shoppingList === "") {
        alert("This Field is Required");
    }
    else {
        list.innerHTML += `<li>${shoppingList}</li>`;
        input.value = "";
    }
}

// Remove Item from Shopping List 

function removeFromShoppingList() {
    let shoppingList = input.value;
    if (shoppingList === "") {
        list.innerHTML -= `<li>${shoppingList}</li>`;
        input.value = "";
    }
    else {
        alert("This Field is Required");
        input.value = "";
    }
}