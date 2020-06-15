
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i
// numeri che ha visto precedentemente. Dopo che sono stati inseriti
// i 5 numeri, il software dice quanti e quali dei numeri da indovinare
// sono stati individuati

// creazione funzione per numeri casuali e inserimento in un allert:
var rangeMaxNumeri = 100;
var numeriDaRicordare = 5;
var serieDaMemorizzare =(creazioneCinqueNumeriCasuali(numeriDaRicordare, rangeMaxNumeri));
var arrayUtente = [];


alert('Memorizza la seguente serie: ' + serieDaMemorizzare);
console.log(serieDaMemorizzare);
// prompt dove inserire i numeri dopo 30 secondi

setTimeout(function generatorePrompt(){
var numeriIndovinati = [];
var inputUtente = 0;
  while (arrayUtente.length < 5 ) {
    var numeroUtente = prompt('Inserisci i numeri che hai visualizzato precedentemente');

    if(controlloArray(serieDaMemorizzare, numeroUtente) === true ){

      inputUtente = inputUtente + 1;
      console.log(inputUtente);
      numeriIndovinati.push(numeroUtente);
      arrayUtente.push(numeroUtente);
    } else {
      arrayUtente.push(numeroUtente);
      console.log(inputUtente);
    }

  }
// avvertire l'utente i numeri individuati.
  alert('Hai indovinato ' + inputUtente + ' numeri' +
  '. I numeri che hai individuato sono ' + numeriIndovinati +
  '. La serie da ricordare era: ' + serieDaMemorizzare +
  '. tu hai inserito ' + arrayUtente);

}, 30000);


// funzione per il prompt


// creare numeri random per 5 volte attraverso una funzione
// che andranno poi inseriti in un array
function creazioneCinqueNumeriCasuali(limiteMaxArray, limiteMax){

  var array = [];

  while ( array.length < limiteMaxArray ) {

    var numeriRandom = Math.floor(Math.random() * limiteMax) + 1;
    // inserirli nell'array solo e solo se il numero non è presente nell'array da memorizzare

    if (!controlloArray(array, numeriRandom)) {
      array.push(numeriRandom);
      // console.log(array);
      }

    }

  return array;
};

// funzione di controllo per creare un array con numeri unici
// creata attraverso un ciclo for

function controlloArray(arrayDaControllare, numeroDaControllare){
  var inArray = false;

  // scorrere l'array in cerca dell'verificaSePresenteElementoArray
  for (var i = 0; i < arrayDaControllare.length; i++) {

    if( numeroDaControllare == arrayDaControllare[i] ){
      inArray = true;
    }

  }
    return inArray;
};
