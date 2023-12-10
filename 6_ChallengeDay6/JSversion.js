// No pasa algunos tests secretos
function maxDistancev1(movements) {
    let distance = {'Left':0, 'Right':0}

    for (let i=0; i<movements.length; i++){

        if (i === 0){
            let element = movements[0]=== '*' ? '>' : movements[0]
            movements = element+movements.substring(1)
        }else {
            element = movements[i] === '*' ? movements[i-1] : movements[i]
            movements = movements.substring(0,i)+element+movements.substring(i+1)
        }
    }

    for (let i=0; i<movements.length; i++){

        if (movements[i] === '<'){
            distance.Left += 1
        } else if (movements[i] === '>'){
            distance.Right += 1
        }
    }
    return distance.Right>distance.Left ? distance.Right - distance.Left : distance.Left - distance.Right
}

let movements1 = '>>*<'
let result = maxDistancev1(movements1)
console.log(result) // -> 2

let movements2 = '<<<>'
let result2 = maxDistancev1(movements2)
console.log(result2) // -> 2

let movements3 = '>***>'
let result3 = maxDistancev1(movements3)
console.log(result3) // -> 5 

let movements4 = '**********'
let result4 = maxDistancev1(movements4)
console.log(result4) // -> 10 

// No pasa algunos tests secretos
function maxDistancev2(movements) {
    let movementsCopy = movements
    let distance = {'Left':0, 'Right':0}

    for (let i=0; i<movements.length; i++){
        if (movements[i] === '<'){
            distance.Left += 1
        } else if (movements[i] === '>'){
            distance.Right += 1
        } else if (movements[i] === '*' && (movementsCopy[i-1] === '<' || movementsCopy[i-1] === undefined)){
            distance.Left += 1 
            movementsCopy = movementsCopy.substring(0,i)+'<'+movementsCopy.substring(i+1)
        } else if (movements[i] === '*' && (movementsCopy[i-1] === '>' || movementsCopy[i-1] === undefined)){
            distance.Right += 1 
            movementsCopy = movementsCopy.substring(0,i)+'>'+movementsCopy.substring(i+1)
        }
    } 

    return distance.Right>distance.Left ? distance.Right - distance.Left : distance.Left - distance.Right
}

result = maxDistancev2(movements1)
console.log(result) // -> 2

result2 = maxDistancev2(movements2)
console.log(result2) // -> 2

result3 = maxDistancev2(movements3)
console.log(result3) // -> 5 

result4 = maxDistancev2(movements4)
console.log(result4) // -> 10 



// No pasa algunos tests secretos
function maxDistancev3(movements) {
    let distance = 0
    let last_sign = 1

    for (let i=0; i<movements.length; i++){
        let sign = 1
        if (movements[i] === '<'){
            sign = -1
        }else if (movements[i] === '*') {
            sign = last_sign
        }
        distance += 1*sign
    }
    if (distance < 0){
        distance = distance * -1
    }
    return distance
}



result = maxDistancev3(movements1)
console.log(result) // -> 2

result2 = maxDistancev3(movements2)
console.log(result2) // -> 2

result3 = maxDistancev3(movements3)
console.log(result3) // -> 5 

result4 = maxDistancev3(movements4)
console.log(result4) // -> 10 