const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const tipPercentage = document.getElementById('tip-percentage');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');



//Function that calculates tip to 2 decimal places//
calculate = () =>{
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = '';
    guests.value = '';
    quality.value = '';
//Checks to make sure it is a number//
    if(tip === 'NaN'){
        tipAmount.innerHTML = 'Tip is $0 each';
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'Tip $'+ tip + '' +'each';
        showTipAmount();
    }
}


showTipAmount = () =>{
    var x = tipAmount;
    x.className = 'show';
    setTimeout(function(){x.className = className.replace('show', '');}, 3000);
}


