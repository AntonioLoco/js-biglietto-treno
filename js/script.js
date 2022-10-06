/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// INPUT UTENTE
const userKilometres = parseFloat(prompt("Quanti chilometri devi percorrere?"));
console.log(userKilometres, typeof(userKilometres));

const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge, typeof(userAge));

// ELABORAZIONE
const priceForKm = 0.21;
let discount = 0;
let priceTicket = priceForKm * userKilometres;
console.log(priceTicket);

if( userAge < 18){
    discount = 0.2;
    priceTicket -= priceTicket * discount;
    console.log(priceTicket);
} else if( userAge > 65){
    discount = 0.4;
    priceTicket -= priceTicket * discount;
    console.log(priceTicket);
}

// OUTPUT
const userKmBox = document.getElementById("user-km");
const userAgeBox = document.getElementById("user-age");
const priceKmBox = document.getElementById("price-km");
const discountBox = document.getElementById("discount");
const priceTicketBox = document.getElementById("price-ticket");

userKmBox.innerHTML = `${userKilometres} Km`;
userAgeBox.innerHTML = `${userAge} anni`;
priceKmBox.innerHTML = `${priceForKm} €`;
discountBox.innerHTML = `${discount * 100}%`;
priceTicketBox.innerHTML = `${priceTicket.toPrecision(2)} €`;
