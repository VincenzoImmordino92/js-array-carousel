/* 1. stampo tutte le immagini dentro a items-wrapper
  2.stampo la mia array con dentro le immagini
  3.metto in un array tutti gli elemnti con la classe 'oggetto'
  4. rimuovo la classe hide del primo elemnto dell'array 'immaginiList' 
  5. assegnamo le variabili dei bottoni 
  6./7.applichiamo al click le diverse funzioni per i bottoni sia avanti che indietro
    a.aggiungiamo la classe hide all'elemento corrente
    b. incrementiamo il contatore
    c. tolgo la class hide all'elemento corrente
    8. aggiungiamo di default al bottone down di inizio pagina la class hide
    9.aggiungiamo al click del bottoneavanti rimuoviamo la classe hide al bottoneIndietro
    10.nell'ultimo elemento del mia array applichiamo al bottoneAvanti la classe hide
    11.






*/


//variabili
const itemsWrapper = document.querySelector('.items-wrapper');


//5.
const btnAvanti =    document.querySelector('.up');
const btnIndietro =  document.querySelector('.down');

//8.
btnIndietro.classList.add('hide');

//.2
const immaginiList = [
                      './consegna/img/01.webp',
                      './consegna/img/02.webp',
                      './consegna/img/03.webp',
                      './consegna/img/04.webp',
                      './consegna/img/05.webp',
]

let contaImg = 0;


//1.
for(let i = 0; i < immaginiList.length; i++){
  const immagine = immaginiList[i];
  
  itemsWrapper.innerHTML += `<img src="${immagine}" class="oggetto hide">`
}

//3.
let oggettoColl = document.getElementsByClassName('oggetto');

console.log(oggettoColl[0]);

//4.
oggettoColl[contaImg].classList.remove('hide');

//6.
btnAvanti.addEventListener('click', function(){
  //a.
  oggettoColl[contaImg].classList.add('hide');
  //b.
  contaImg++;
  //c.
  oggettoColl[contaImg].classList.remove('hide');

  //9.
  btnIndietro.classList.remove('hide')
  // controllo se il mio contaImg è uguale all'ultimo elemento aggiungo al bottoneavanti la classe hide
  if(contaImg === oggettoColl.length - 1){
    btnAvanti.classList.add('hide')
  }

})
//7.
btnIndietro.addEventListener('click', function(){
  //a.
  oggettoColl[contaImg].classList.add('hide');
  //b.
  contaImg--;
  //c.
  oggettoColl[contaImg].classList.remove('hide');
  
  //10.
  btnAvanti.classList.remove('hide');

    // controllo se il mio contaImg è uguale al primo elemento aggiungo al bottoneIndietro la classe hide
  if(contaImg === 0){
    btnIndietro.classList.add('hide');
  }
  })








