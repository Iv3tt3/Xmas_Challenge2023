
function drawGiftv0(size, symbol){
    let long = size + size-1;
    let lines = '#'
    let blank = ' ';
    let result = [];
    for (let i=0; i<size; i++){
        if(i==0){
            console.log(blank.repeat(size-1) + lines.repeat(size))
        }else if(i ==1)
            console.log(blank.repeat(size-i-1) + lines + symbol.repeat(size-2) + lines.repeat(2))
        else if( i ==2){
            console.log(blank.repeat(size-i-1) + lines + symbol.repeat(size-2) + lines + symbol + lines)
        }else if (i == size-1){
            console.log(lines.repeat(size) + symbol.repeat(2) + lines)
        }
        else {
            console.log(blank.repeat(size-i-1) + lines + symbol.repeat(size-2) + lines + symbol.repeat(2) + lines)
        }
    }
    for (let i=0; i<size-1; i++){
        // Imprimir las strings al reves
    }
    return result
}

// Pide una string, no una lista de strings + quitar los console.log
function drawGiftv1(size, symbol){
    let long = size + size-1;
    let lines = '#'
    let blank = ' ';
    let result = [];

    function getString(a,b,c,d,e,f){
        let string = (blank.repeat(a) + lines.repeat(b) + symbol.repeat(c) + lines.repeat(d) + symbol.repeat(e) + lines.repeat(f))
        console.log(string)
        return string
    }

    for (let i=0; i<size; i++){
        if(i==0){
            result.push(getString(size-1, size))
        }else if(i ==1){
            result.push(getString(size-i-1, 1, size-2, 2))
        }else if (i == size-1){
            result.push(getString(0, size, i-1, 1))
        }
        else {
            result.push(getString(size-i-1, 1, size-2, 1, i-1, 1))
        }
    }
    let lenResult = result.length-2
    for (let i=0; i<size-1; i++){
        let string = result[lenResult-i].replaceAll(" ","")
        result.push(string)
        console.log(string)
    }
    result.push('')
    console.log('')
    return result
}

function drawGift(size, symbol){
    let long = size + size-1;
    let lines = '#'
    let blank = ' ';
    let result = '';
    let strings = [];

    function getString(a,b,c,d,e,f){
        let string = (blank.repeat(a) + lines.repeat(b) + symbol.repeat(c) + lines.repeat(d) + symbol.repeat(e) + lines.repeat(f))
        return string
    }

    for (let i=0; i<size; i++){
        if(i==0){
            let string = getString(size-1, size) + '\n'
            result += string 
            strings.push(string)
        }else if(i ==1){
            let string = getString(size-i-1, 1, size-2, 2) + '\n'
            result += string 
            strings.push(string)
        }else if (i == size-1){
            let string = getString(0, size, i-1, 1) + '\n'
            result += string 
            strings.push(string)
        }
        else {
            let string = getString(size-i-1, 1, size-2, 1, i-1, 1) + '\n'
            result += string 
            strings.push(string)
        }
    }
    let lenResult = strings.length-2
    for (let i=0; i<size-1; i++){
        let string = strings[lenResult-i].replaceAll(" ","")
        result = result + string 
    }
    return result
}


let draw = drawGift(4, '+')
console.log(draw)

/*
   #### 3b 4# // size-1 de * | size de #)
  #++## 2b 1# nS 2# | 1# | (n+) | 2# // size-2 de * | 1# | len - 2 - lo ya puesto de simbolos | 2#
 #++#+# 1b 1# =S 1# nS 1# 
####++# 0b S# nS 1#
#++#+#  1# =S 1# nS 1#  -- ojo len -1
#++##   1# 
####    S#
*/

draw = drawGift(5, '*')
console.log(draw)

/*
    ##### 4b+5
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

draw = drawGift(6, '*')
console.log(draw)
/*
     ###### 5b+6
    #****##
   #****#*#
  #****#**#
 #****#***#
######****#
#****#***#
#****#**#
#****#*#
#****##
######
*/

draw = drawGift(1, '^')
console.log(draw)
/*
#
*/

draw = drawGift(10, "-")
console.log(draw)

/*
"         ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
"
*/