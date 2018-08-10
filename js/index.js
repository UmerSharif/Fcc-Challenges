
let billValue = [
    { name: 'ONE HUNDRED', value: 100.00},
    { name: 'TWENTY', value: 20.00},
    { name: 'TEN', value: 10.00},
    { name: 'FIVE', value: 5.00},
    { name: 'ONE', value: 1.00},
    { name: 'QUARTER', value: 0.25},
    { name: 'DIME', value: 0.10},
    { name: 'NICKEL', value: 0.05},
    { name: 'PENNY', value: 0.01}
];

// Example cash-in-drawer array:
// ["ONE HUNDRED", 100]]
// ["TWENTY", 60],
// ["TEN", 20],
// ["FIVE", 55],
// ["ONE", 90],
// ["QUARTER", 4.25],
// ["DIME", 3.1],
// ["NICKEL", 2.05],
// [["PENNY", 1.01],

function checkCashRegister(price, cash, cid) {

    cid = cid.reverse();
    let changeDue = cash - price;
    let output = {status : null, change : []};
    let totalCash = cid.reduce((sum , pair) => sum += pair[1],0);

    if(totalCash < changeDue){
        cid = cid.reverse();
        output.status = "INSUFFICIENT_FUNDS";
        return output;

    } else if (totalCash === changeDue){
        cid = cid.reverse();
        output = {
            status : "CLOSED",
            change : cid
        };

        return output;

    }
    else if(totalCash > changeDue){

        let result = billValue.reduce(function(acc, nextVal, index){

            let ArrayOfPayments = 0;

           if(changeDue >= nextVal.value) {
               while (changeDue > 0) {
                   if(cid[index][1] === 0 || changeDue < nextVal.value) {
                       break;
                   }
                   changeDue -= nextVal.value; //changeDue = changeDue - next.value
                   cid[index][1] -= nextVal.value;
                   ArrayOfPayments += nextVal.value;
                   changeDue = Math.round(changeDue * 100) / 100;

               }
               ArrayOfPayments = Math.round(ArrayOfPayments * 100) / 100;
               acc.push([nextVal.name , ArrayOfPayments]);
           }

            return acc;

        },[]);

        output = {
            status : "OPEN",
            change : result
        };

        return output;

    }

    return output;

}





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
