
function findNaughtyStep(original, modified) {
    let result = ''
    let len = Math.max(original.length, modified.length)
    for (let i=0; i<len; i++){
        if (original.length > modified.length && original[i] != modified[i]){
            result = original[i]
            break
        }
        if (original.length < modified.lenght || original[i] != modified[i]){
            result = modified[i]
            break
        }

      result = ''
    }
    return result
}

const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'

console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // ''*/