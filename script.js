const amount = document.getElementById('amount');
const guest = document.getElementById('guests');
const tipPercentage = document.getElementById('tip-percentage');
const tipAmount = document.getElementById('tip-amount');



//Function that calculates tip to 2 decimal places//
calculate = () => {
    const tip = ((amount.value * tipPercentage.value) / (guest.value)).toFixed(2);
    amount.value = '';
    guest.value = '';
    tipPercentage.value = '';
//Checks to make sure it is a number//
    if(tip === 'Nan'){
        tipAmount.innerHTML = 'Tip is $0 each';
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'Tip $'+ tip + 'each';
        showTipAmount();
    }
}


showTipAmount = () => {
    var x = tipAmount;
    x.className = 'show';
    setTimeout(function(){x.className = className.replace('show', '');}, 3000)
}