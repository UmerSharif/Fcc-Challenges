function checkCashRegister(price, cash, cid) {

    let changeDue = cash - price;
    let output = {status : null, change : []};
    let totalCash = cid.reduce((sum , pair) => sum += pair[1],0);

    if(totalCash < changeDue){
        output.status = "INSUFFICIENT_FUNDS";

    } else if (totalCash === changeDue){
        output = {
            status : "CLOSED",
            change : cid
        }

    }
    return output;
}



// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);















/* // fcc telephone validator
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

telephoneCheck("(555)-555-5555");*/
