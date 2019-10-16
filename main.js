function totalChange() {
    var paid = document.getElementById("amount-received").value;
    var due = document.getElementById("amount-due").value;
    var change = (paid - due).toFixed(2);
    document.getElementById("output").innerHTML = change;
    return change;
}

function calcChange() {
    var dollars = Math.floor(totalChange());
    change = (totalChange() - dollars).toFixed(2) * 100;
    document.getElementById('dollars-output').innerHTML = dollars;

    var quarters = Math.floor(change / 25);
    change = change - (quarters * 25);
    document.getElementById('quarters-output').innerHTML = quarters;

    var dimes = Math.floor(change / 10);
    change = change - (dimes * 10);
    document.getElementById('dimes-output').innerHTML = dimes;

    var nickels = Math.floor(change / 5);
    change = change - (nickels * 5);

    document.getElementById('nickels-output').innerHTML = nickels;

    var pennies = Math.floor(change / 1);
    change = change - (pennies * 1);
    document.getElementById('pennies-output').innerHTML = pennies;
}
