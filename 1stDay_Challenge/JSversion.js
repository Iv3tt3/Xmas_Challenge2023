function findRepeatedFirst(gifts) {
  let result = -1
  let len = gifts.length
  for (let i=0; i<len;i++) {
    let num = gifts[0]
    gifts.shift();
    if(gifts.includes(num)){
      result = num
      break
    }
  }
  return result
}

function findFirstRepeated(gifts) {
  let result = -1
  let len = gifts.length
  let ids = []
  for (let i=0; i<len;i++) {
    if(ids.includes(gifts[0])){
      result = gifts[0]
      break
    }
    ids.push(gifts[0]);
    gifts.shift();
  }
  return result
}

const giftIds = [2, 1, 3, 5, 3, 2]
console.log(findRepeatedFirst(giftIds)) // 2
console.log(findFirstRepeated(giftIds)) // 3

const giftIds2 = [1, 2, 3, 4]
console.log(findRepeatedFirst(giftIds2)) // -1
console.log(findFirstRepeated(giftIds2)) // -1
const firstRepeatedId2 = findRepeatedFirst(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
console.log(findRepeatedFirst(giftIds3)) // 5
console.log(findFirstRepeated(giftIds3)) // 5