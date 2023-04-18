console.log("hello does this work");
let list = document.querySelector("#cats-list");
let input = document.querySelector("#input");
function addCat() {
    let cat = input.value;
    if (cat === "") {
        alert("This Field is Required");
    }
    else {
        list.innerHTML += `<li>${cat}</li>`;
        input.value = "";
    }
}
