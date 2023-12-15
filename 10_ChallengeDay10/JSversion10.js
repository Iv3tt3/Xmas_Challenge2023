// Not completed, order incorrect and no blank spaces
function createChristmasTreeV0(ornaments, height) {

    ornaments_line = ``
    ornaments_string = ``
    index = 0
    for (let i = 0; i < height; i++){
        if (typeof ornaments[i] === 'undefined'){
            index = 0
        }
        ornaments_line += ornaments[index]
        ornaments_string += ornaments_line + "\n"
        index += 1
    }

    ornaments_string += '|'

    return ornaments_string
}

//Not completed, order incorrect
function createChristmasTreev1(ornaments, height) {

    const blankSpaces = (string, lenLast) => { 
        if (string.length !== lenLast){
            let repetitions = (lenLast - string.length+1)/2
            string = " ".repeat(repetitions) + string 
        }
        return string
    }

    let ornamentsLine = ``
    let acum = ''
    let ornamentsResult = []
    let index = 0
    for (let i = 0; i < height; i++){
        if (typeof ornaments[i] === 'undefined'){ //2
            index = 0
        }
        ornamentsLine += ornaments[index] + " " // 1+2
        if (i === height-1 && height%2 ===0){
            ornamentsLine += ornaments[index+1] //ultima linnea
        }
        ornamentsResult.push(ornamentsLine) //push 1
        index += 1
    }

    ornamentsResult.push("| ")

    let lenLast = ornamentsResult[ornamentsResult.length-2].length //Longitud de la ultima linea
    for (let i = 0; i<ornamentsResult.length; i++){
        ornamentsResult[i] = blankSpaces(ornamentsResult[i], lenLast)
    }
    ornamentsResult = ornamentsResult.join('\n')

    return ornamentsResult

}

function findPattern (){
    // Find pattern to correct order

    let ornaments = '123'
    let treeString = ''
    let ornamentsRepeatedx3 = ornaments.repeat(20)

    // i=0
        let sliceIni = 0 // i = 0
        let sliceFin = 1 // i + 1
        let result = ornamentsRepeatedx3.slice(sliceIni,sliceFin) // 1
        console.log(result)
        treeString += result // 1

    // i=1 
        sliceIni = 1 // = ?? (i)
        sliceFin = 3 // = ?? (i + 1 + 1) treeString.length?

        result = ornamentsRepeatedx3.slice(sliceIni, sliceFin) // 23
        console.log(result)
        treeString = treeString + result //123
        // treeString.length = 3 

    //i=2 && treeString.length = 3
        sliceIni = 3 // not i --> last sliceFin
        sliceFin = 6 // = ?? (i + 1 + len) 

        result = ornamentsRepeatedx3.slice(sliceIni,sliceFin) // 123
        console.log(result)
        treeString = treeString + result //123123
        // treeString.length = 6

    //i=3 
        sliceIni = 6 // sliceFin
        sliceFin = 10 // 3 + 1 + 6 --> i + 1 + tree.String.lenght
        result = ornamentsRepeatedx3.slice(sliceIni,sliceFin) //1231
        console.log(result)
        treeString = treeString + result //1231231231
        // treeString.length = 10

    //i=4
        sliceIni = 10 // sliceFin = treeString.length
        sliceFin = 15 // 4 + 1 + 10
        result = ornamentsRepeatedx3.slice(sliceIni,sliceFin) //23123
        console.log(result)
        treeString = treeString + result //123123123123123
        // treeString.length = 15

    //i=5
        sliceIni = 15 // not sliceFin --> treeString.length
        sliceFin = 21 // 5 + 1 + 15
        result = ornamentsRepeatedx3.slice(sliceIni,sliceFin) //123123
        console.log(result)
        treeString = treeString + result //123123123123123123123

}

//findPattern()




function createChristmasTree(ornaments, height) {
    
    const blankSpaces = (string, lenLast) => { 
        if (string.length !== lenLast){
            let repetitions = (lenLast - string.length)/2
            string = " ".repeat(repetitions) + string 
        }
        return string
    }

    const addCharacterSpace = (string) => {
        let newString = ''
        for (let i = 0; i < string.length; i++){
            if (i === string.length-1){
                newString =  newString + string[i]
            } else {
                newString =  newString + string[i] + ' '
            }
        }
        return newString
    }

    let ornamentsRepeatedx3 = ornaments.repeat(height*3)

    let treeLine = ''
    let treeResult = []
    let sliceIni = 0
    let sliceFin = 0

    for (let i = 0; i<height; i++){
        sliceIni = treeResult.join('').length
        sliceFin = i + 1 + sliceIni
        treeLine = ornamentsRepeatedx3.slice(sliceIni,sliceFin)
        
        treeResult.push(treeLine)
    }

    treeResult.push("|")

    let lenLast = height*2 //Longitud de la ultima linea
    for (i = 0; i<treeResult.length; i++){
        treeResult[i] = addCharacterSpace(treeResult[i])
        treeResult[i] = blankSpaces(treeResult[i], lenLast)
    }
    treeResult = treeResult.join('\n') 

    return treeResult + '\n'

}

console.log(createChristmasTree("x", 3))

/*:

  x
 x x
x x x
  |

*/

console.log(createChristmasTree("xo", 4))

/*

   x
  o x
 o x o
x o x o
   |

*/

console.log(createChristmasTree("123", 5))

/*

    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |

*/

console.log(createChristmasTree("*@o", 3))

/*

  *
 @ o
* @ o
  |

*/