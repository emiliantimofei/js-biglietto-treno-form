// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Buon pomeriggio e buon lavoro !
let = document.getElementById('minorenne');
let = document.getElementById('adulto');
let = document.getElementById('pensionato');



let elNomeCognome = document.getElementById('nome-cognome');

let elKm = document.getElementById(parseInt('km'));
let priceOfTrip = (0.21 * elKm);
let priceMinor = (priceOfTrip - (priceOfTrip * 0.2));
let priceOld = (priceOfTrip - (priceOfTrip * 0.4));

let elFascia = document.getElementById('fascia');
 
let elGenera = document.getElementById('genera');
let elAnnulla = document.getElementById('annulla');

// console.log(elNomeCognome, elKm, elFascia, elGenera, elAnnulla);
let elBox1 = document.querySelector('.box-1');
let elBox2 = document.querySelector('.box-2');
let elBox3 = document.querySelector('.box-3');
let elBox4 = document.querySelector('.box-4');
let elBox5 = document.querySelector('.box-5');

elGenera.addEventListener('click', function(){
    let testo = elNomeCognome.value;
    let number = elKm.value;
    let age = elFascia.value;
    console.log(testo, number, age);
    elBox1.innerHTML = testo;
    elBox2.innerHTML = age;
});