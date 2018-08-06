function telephoneCheck(str) {
    let digits = str.replace(/\D/g, "");
    let digitsLength =  digits.length;
    let removeHyphen = str.replace(/-/g, '');
    let newStr = removeHyphen.replace(" ", "");
    let invalidChar = ['?','*','&','^','%','$','#','@','!','~','>','<','.','/','='];

    if(digitsLength === 10){
        for(let char = 0; char <= invalidChar.length; char++){
            if(newStr.indexOf(invalidChar[char]) > -1) {
                return false;
            }
        }
        if(str[0] === '(' && str[str.length - 1] === ')') {
            return false;
        }

        else  if(newStr[0] !== '(' && newStr[3] === ')' || newStr[0] === '(' && newStr[3] !== ')' ){
            if(newStr[4] === ')'){
                return true;
            } else
            return false;
        }

        else {
            return true;
        }
    }
    else if(digitsLength === 11 && str[0] === '1'){
        if(newStr[1] !== '(' && newStr[4] === ')'){
            return false;
        } else {
            return true
        }
    }
    else {
        return false;
    }
}

telephoneCheck("(555)-555-5555");