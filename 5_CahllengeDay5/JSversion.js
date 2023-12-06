function cyberReindeer_v1(road, time) {
    let originalRoad = road //'S..|...|..'
    let result = [road] //['S..|...|..', 'S..|...|..']
    let index = 0
    while (result.length < time) {
        let lastResultRoad = result[result.length-1]
        let positionS = lastResultRoad.indexOf('S');
        if (originalRoad[positionS+1] == '|'){
            for (let i = 0; i<2; i++){
                result.push(lastResultRoad)
            }
            lastResultRoad = result[result.length-1]
            lastResultRoad = lastResultRoad.substring(0,positionS+1)+'*'+lastResultRoad.substring(positionS+2)
            originalRoad = originalRoad.substring(0,positionS+1)+'*'+originalRoad.substring(positionS+2)
        }
        if (index == 0){
            lastResultRoad = lastResultRoad.substring(0,positionS)+'.'+lastResultRoad.substring(positionS+1)
        } else {
            lastResultRoad = lastResultRoad.substring(0,positionS)+originalRoad[positionS]+lastResultRoad.substring(positionS+1)
        }
        lastResultRoad = lastResultRoad.substring(0,positionS+1)+'S'+lastResultRoad.substring(positionS+2)
        index += 1
        result.push(lastResultRoad)
        if (lastResultRoad[lastResultRoad.length-1] === 'S'){
            break
        }
    }
  
    return result.slice(0,time)
  }

function cyberReindeer(road, time) {
    let originalRoad = road //'S..|...|..'
    let result = [road] //['S..|...|..', 'S..|...|..']
    let index = 0
    while (result.length < time) {
        let lastResultRoad = result[result.length-1]
        let positionS = lastResultRoad.indexOf('S');
        if (originalRoad[positionS+1] == '|'){
            let index2 = index
            while (index2<4){
                result.push(lastResultRoad)
                index2 +=1
            }
            lastResultRoad = result[result.length-1]
            lastResultRoad = lastResultRoad.replaceAll("|",'*')
            originalRoad = originalRoad.replaceAll("|",'*')
        }
        if (index == 0){
            lastResultRoad = lastResultRoad.substring(0,positionS)+'.'+lastResultRoad.substring(positionS+1)
        } else {
            lastResultRoad = lastResultRoad.substring(0,positionS)+originalRoad[positionS]+lastResultRoad.substring(positionS+1)
        }
        lastResultRoad = lastResultRoad.substring(0,positionS+1)+'S'+lastResultRoad.substring(positionS+2)
        index += 1
        result.push(lastResultRoad)
        if (lastResultRoad[lastResultRoad.length-1] === 'S'){
            break
        }
    }
  
    return result.slice(0,time)
  }

const road = 'S..|...|..'
const time = 10 // units of time
console.log(cyberReindeer(road, time))

const road2 = 'S.|.'
const time2 = 4 
console.log(cyberReindeer(road2, time2))

const road3 = 'S.|.|.'
const time3 = 7
console.log(cyberReindeer(road3, time3))

const road4 = 'S.|..'
const time4 = 6
console.log(cyberReindeer(road4, time4))

const road5 = 'S.|.|.|......|.||.........'
const time5 = 8
console.log(cyberReindeer(road5, time5))

