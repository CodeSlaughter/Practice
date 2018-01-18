//Chapter 1
//1.1
function isUnique(string){
    var obj = {};
    for (var i = 0; i < string.length; i++){
        if (obj[string[i]] !== undefined ){
            return false
        }
        obj[string[i]] = true
    }
    return true
}

//console.log(isUnique('butt'))

//1.2
function isPermutaion(string1, string2){
    var arr1, arr2 = [];
    arr1 = string1.split('');
    arr2 = string2.split('');
    string1 = arr1.sort().join()
    string2 = arr2.sort().join()

    if (string1 === string2){
        return true
    }
    return false
}

//console.log(isPermutaion('dog', 'gld'))

//1.3
function URLify(string){
    var arr = string.split(' ');
    return arr.join('%20')
}

console.log(URLify('this is it'))

//1.4
 function palPerm()

