// const travelDistance = parseInt(prompt('Inserire il numero di Kilometri da percorrere'))
// const userAge = parseInt(prompt("Inserire l'età del passeggero"))
// let discountTicket;
// if (userAge < 18){
//     discountTicket = 20 / 100;
// } else if (userAge > 65){
//     discountTicket = 40 / 100;
// } else{
//     discountTicket = 0;
// }

// let priceTicket = travelDistance * 0.21 * (1 - discountTicket);

// document.getElementById('finalPrice').innerHTML += priceTicket.toFixed(2) + '€';

let userAge;
let travelDistance;
let discountTicket;
let priceTicket;

function calcPrice(){
    userAge = document.getElementById('userAge').value;
    if (userAge < 18){
        discountTicket = 20 / 100;
    } else if (userAge > 65){
        discountTicket = 40 / 100;
    } else{
        discountTicket = 0;
    }
    travelDistance = document.getElementById('travelDistance').value;
    priceTicket = travelDistance * 0.21 * (1 - discountTicket);
    document.getElementById('finalPrice').innerHTML = 'Il prezzo del tuo biglietto é: ' + priceTicket.toFixed(2) + '€';
}
