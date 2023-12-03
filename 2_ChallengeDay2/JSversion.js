function manufacture(gifts, materials){
    let result = []
    for (let i=0; i<gifts.length; i++){
      let enoughMaterials = true
      let gift = gifts[i]
      for (let j=0; j<gift.length; j++){ 
        if (!materials.includes(gift[j])){
          enoughMaterials = false
        }
      }
      if (enoughMaterials){
        result.push(gifts[i])
      }
    }
    return result
  }


const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log(manufacture(gifts, materials)) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'
console.log(manufacture(gifts2, materials2))  // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'
console.log(manufacture(gifts3, materials3)) // []
