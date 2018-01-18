//Chapter 1
//1.1
function isUnique(string) {
    var obj = {};
    for (var i = 0; i < string.length; i++) {
        if (obj[string[i]] !== undefined) {
            return false
        }
        obj[string[i]] = true
    }
    return true
}

//console.log(isUnique('butt'))

//1.2
function isPermutaion(string1, string2) {
    var arr1, arr2 = [];
    arr1 = string1.split('');
    arr2 = string2.split('');
    string1 = arr1.sort().join()
    string2 = arr2.sort().join()

    if (string1 === string2) {
        return true
    }
    return false
}

//console.log(isPermutaion('dog', 'gld'))

//1.3
function URLify(string) {
    var arr = string.split(' ');
    return arr.join('%20')
}

//console.log(URLify('this is it'))

//1.4
function palPerm(string) {
    var obj = {}
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            if (obj[string[i]] === undefined) {
                obj[string[i]] = 1
            } else {
                obj[string[i]] += 1
            }
        }
    }
    var arr = Object.keys(obj)
    var hasOdd = false
    for (var j = 0; j < arr.length; j++) {
        if (obj[arr[j]] % 2 !== 0) {
            if (hasOdd === true) {
                return false
            }
            hasOdd = true
        }
    }
    return true
}

//console.log(palPerm('ra mi'))

//1.6
function stringComp(string) {
    var arr = [string[0]]
    var letterCount = 1
    for (var i = 1; i <= string.length; i++) {
        if (i === string.length) {
            arr.push(letterCount)
        }
        else if (string[i - 1] === string[i]) {
            letterCount++
        } else {
            arr.push(letterCount)
            arr.push(string[i])
            letterCount = 1
        }
    }
    if (arr.join('').length < string.length) {
        return arr.join('')
    } return string
}

//console.log(stringComp('a'))

//1.9

function stringRot(string1, string2) {
    if (string1.length === string2.length) {
        string1 = string1 + string1
        if (string1.indexOf(string2) > -1) {
            return true
        }
    }
    return false
}

//console.log(stringRot('funs', 'nsf'))
