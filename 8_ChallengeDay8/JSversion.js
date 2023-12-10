function organizeGifts(gifts) {

    function splitStirng(gifts){
        let giftsList = [];
        let number = '';

        for (i=0; i < gifts.length; i++){
            
            if (!isNaN(Number(gifts[i]))){
                number += gifts[i];
            }else{
                let type = gifts[i];
                giftsList.push([number,type]);
                number = ''
            }
        }
        return giftsList
    }

    function getGiftWarehouse(number, type){
        let numBags = number%10;
        let numBoxes = (number- numBags)%50;
        let numPallet = number - numBoxes - numBags;

        let string = getString(numPallet/50,`[${type}]`) 
            + getString(numBoxes/10,`{${type}}`) 
            + (numBags === 0 ? '' : `(${getString(numBags,type)})`);

        function getString(number, string){
            return string.repeat(number)
        }

        return string
    }

    let giftsList = splitStirng(gifts);
    let result = '';
    for (i = 0; i < giftsList.length; i++){
        result = result + getGiftWarehouse(giftsList[i][0], giftsList[i][1]);
    }
    return result
}
let result1 = organizeGifts('76a11b');
console.log(result1);
// `[a]{a}{a}(aaaaaa){b}(b)`


result1 = organizeGifts("20a");
console.log(result1);
// "{a}{a}"


result1= organizeGifts("70b120a4c")
console.log(result1)
// "[b]{b}{b}[a][a]{a}{a}(cccc)"

result1 = organizeGifts("9c")
console.log(result1)
//"(ccccccccc)"

result1 = organizeGifts("19d51e")
console.log(result1)
//"{d}(ddddddddd)[e](e)"