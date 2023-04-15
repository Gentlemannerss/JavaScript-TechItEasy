/* Opdracht 4a*/
function nameTv(arrayTV) {
    return arrayTV.map((tv) => {
        return `${tv.brand} ${tv.type} - ${tv.name}`
    })
}
nameTv(inventory);

/*const tvNames = nameTv(inventory);
document.getElementById("nameTV").textContent = tvNames.join(", ");*/


/* Opdracht 4b*/
function priceTV(arrayTV) {
    arrayTV.find((tv) => {
        return `€${tv.price},-`
    })
}
priceTV(inventory);
/*document.getElementById("priceTV").textContent = priceTV;*/


/* Opdracht 4c*/
function screenSize(arrayTV) {
    arrayTV.map((tv) => {
        let result ="";
        if (tv.length === 1) {
            result += `${sizes[0]} inch (${sizes[0] * 2.54} cm)`;
        } else {
            for (let i = 0; i < tv.length; i++) {
                result += `${tv[i]} inch (${tv[i] * 2.54} cm)`;
                if (i < tv.length - 1) {
                    result += " | ";
                }
            }
        }
        return result;
    });
}

/* opdracht 4d*/

Script

/* Opdracht 4e*/
function allInfo() {
    .map
    + 4a 4b 4c
}