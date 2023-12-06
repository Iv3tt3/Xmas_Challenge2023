
function decode(message) {
    function findPartToRevert(message){
        let strToReverse = ''
        let openParent = ''
        let closeParent = ''
        for (let i = 0; i < message.length; i++){
            if (message[i] === '('){
                openParent = i
            }
            else if (message[i] === ')'){
                closeParent = i
                break
            }
            
        }
        strToReverse = message.slice(openParent+1, closeParent)
        return strToReverse
    }

    function reverse(string){
        let newString = ''
        let len = string.length
        
        for (let i=0; i < len; i++){
            newString = newString + string[len-(i+1)]
            string = string.slice(0, -1)
        }
    return newString
    }

    while(message.includes('(')){
        let strToRevert = (findPartToRevert(message))
        let reversedStr = reverse(strToRevert)
        message = message.replace(`(${strToRevert})`, reversedStr) 
    }
    
    return message
    
}


const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s') //nta)alc(u
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus */