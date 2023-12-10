function adjustLights(lights) {

    function getOption(color,length){
        let option = [color]
        for (i=0; i<length; i++){
            option.push(option[i] === '🟢' ? '🔴' : '🟢')
        }
        return option
    }
    function compareOptions(lights){
        let greenFirst = getOption('🟢', lights.length)
        let redFirst = getOption('🔴', lights.length)
        let countGreenOption = 0
        let countRedOption = 0
        for (i=0; i<lights.length; i++){
            countGreenOption += (lights[i] === greenFirst[i] ? 0 : 1)
            countRedOption += (lights[i] === redFirst[i] ? 0 : 1)
        }
        return Math.min(countGreenOption,countRedOption)
    }
    return compareOptions(lights)
}

let lights1 = ['🟢', '🔴', '🟢', '🟢', '🟢']
console.log(adjustLights(lights1))

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (you change the second light to 🟢 and the third to 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (they are already alternating)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (you change the second light to 🟢)