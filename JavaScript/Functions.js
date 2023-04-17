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
/* optie 1:
function priceTV(arrayTV) {
    arrayTV.find((tv) => {
        return `€${tv.price},-`
    })
}*/

function priceTV(arrayTV) {
    const tv = arrayTV.find((tv) => {
        return tv;
    });
    return `€${tv.price},-`;
}

priceTV(inventory);
/*document.getElementById("priceTV").textContent = priceTV;*/


/* Opdracht 4c*/
/* Optie 1, werkt niet.
function screenSize(arrayTV) {
    arrayTV.map((tv) => {
        let result ="";
        if (tv.length === 1) {
            result += `${tv.sizes[0]} inch (${tv.sizes[0] * 2.54} cm)`;
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
*/

function generateScreenSizes(tv) {
    return tv.availableSizes.map(screenSize => `${screenSize} inch (${screenSize * 2.54} cm)`).join(" | ");
}

/* opdracht 4d*/

function showInfo(tv) {
    return `${nameTv(tv)}<br />${priceTV(tv)}<br />${generateScreenSizes(tv)}<br /><br \>`
}


document.getElementById("allInfo").textContent = showInfo(inventory);

/* Opdracht 4e*/
function generateProductList(inventory) {
    return inventory.map(tv => `${nameTv(tv)}<br />${priceTV(tv)}<br />${generateScreenSizes(tv)}<br /><br />`)
}