function totalChange() {
    var Paid = document.getElementById("amount-received").value;
    var Due = document.getElementById("amount-due").value;
    var change = (Paid - Due).toFixed(2);
    document.getElementById("output").innerHTML = change;
    return change;
}

function calcChange() {
    var Dollars = Math.floor(totalChange());
    change = (totalChange() - Dollars).toFixed(2) * 100;

    var Quarters = Math.floor(change / 25);
    change = change - (Quarters * 25);

    var Dimes = Math.floor(change / 10);
    change = change - (Dimes * 10);

    var Nickels = Math.floor(change / 5);
    change = change - (Nickels * 5);

    var Pennies = Math.floor(change / 1);
    change = change - (Pennies * 1);

    document.getElementById("dollars-output").value;
    document.getElementById("quarters-output").value;
    document.getElementById("dimes-output").value;
    document.getElementById("nickels-output").value;
    document.getElementById("pennies-output").value;
}