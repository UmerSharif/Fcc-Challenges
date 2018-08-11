
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
    let changeDue = cash - price; // calculate the change due
    let output = {status : null, change : []}; // the output format, its given in the challenge
    let totalCash = cid.reduce((sum , pair) => sum += pair[1],0); // calculate total cash in the register

    // simple conditions to check and return output if true.
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
    // the actual calculation starts here
    else if(totalCash > changeDue){

        let result = billValue.reduce(function(acc, nextVal, index){

            let ArrayOfPayments = 0;

            if(changeDue >= nextVal.value) {
                while (changeDue > 0) {
                    if(cid[index][1] === 0 || changeDue < nextVal.value) {
                        break;
                    }
                    changeDue -= nextVal.value; //changeDue = changeDue - next.value, subtract the value from changeDue
                    cid[index][1] -= nextVal.value; //
                    ArrayOfPayments += nextVal.value;
                    changeDue = Math.round(changeDue * 100) / 100;

                }
                ArrayOfPayments = Math.round(ArrayOfPayments * 100) / 100;
                if(ArrayOfPayments > 0){ //only add value to accumulator array if its not zero
                    acc.push([nextVal.name , ArrayOfPayments]);
                }

            }

            return acc;

        },[]);

        output = {
            status : "OPEN",
            change : result
        };

        // if at the end changeDue is still greater than the cash available then return insufficient funds.
        if(changeDue > output.change[0][1]){ // comparing the changeDue with the last index of final output
            output = {
                status : "INSUFFICIENT_FUNDS",
                change : []
            };

            return output;
        }
        return output;

    }
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);