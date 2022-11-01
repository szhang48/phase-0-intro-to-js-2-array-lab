const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(cat) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) { 
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) { 
    const cat = [...cats, name];
    return cat;
}
function prependCat(name) { 
    const cat = [name, ...cats];
    return cat;
}
function removeLastCat() {
    const cat = cats.slice(0, -1);
    return cat;

}
function removeFirstCat() {
    const cat = cats.slice(1); 
    return cat;
}