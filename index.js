const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(string) {
    cats.push (string)
    return
}

function destructivelyPrependCat(string) {
    cats.unshift (string)
       return
}

function destructivelyRemoveLastCat(string) {
    cats.pop (string)
       return
}

function destructivelyRemoveFirstCat(string) {
    cats.shift (string)
       return
}

function appendCat(string){
    let copyOfCats = [...cats, string ]   
        return copyOfCats
}

function prependCat(string){
    let copyOfCats = [string, ...cats ]
        return copyOfCats
}

function removeLastCat(string){
    let copyOfCats = [...cats]   
    copyOfCats.pop()
        return copyOfCats
}

function removeFirstCat(string){
    let copyOfCats = [...cats]   
    copyOfCats.shift()
        return copyOfCats
}