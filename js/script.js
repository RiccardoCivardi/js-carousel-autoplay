/*** MANTENGO IL LOOP ***/ 
/*** GENERO DINAMICAMENTE TUTTO, ANCHE IL DIV .carousel ***/
/*** BONUS THUMBNAILS ***/
 

// array immagini 
const imagesCarousel = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
];

// prendo il main-wrapper 
const mainWrapper = document.querySelector('.main-wrapper');

// creo div.carousel
const divCarousel = document.createElement('div');;
// creo div.immages 
const divImages = document.createElement('div');
// creo div.thumbnails 
const divThumbnails = document.createElement('div');
// creo div bottoni avanzamento 
const next = document.createElement('div');
const prev = document.createElement('div');

// creo contatore inizializzato a 0
let contCarousel = 0;

// a divCarousel assegno la classe .carousel
divCarousel.classList.add('carousel');
// a divImages assegno la classe .images
divImages.classList.add('images');
// a divThumbnails assegno la classe .thumbnails
divThumbnails.classList.add('thumbnails');
// ai div dei puslasnti assegno le classi .circle .top e .bottom
next.classList.add('circle','bottom');
prev.classList.add('circle','top');
// nei div dei pulsanti inserisco le frecce
next.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
prev.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';

// inserisco divCarousel nell'html
mainWrapper.append(divCarousel);
// inserisco divImages e divThumbnails nell'html
divCarousel.append(divImages, divThumbnails);


// creo HTML interno a div.images 
for(let i = 0; i < imagesCarousel.length; i++){
  // creo img
  const image = document.createElement('img');
  // aggiungo classe .item
  image.classList.add('item');
  // aggiungo src img
  image.src = 'img/' + imagesCarousel[i];
  // aggiungo alt img
  image.alt = imagesCarousel[i];
  // scrivo img dentro l'html di divImages
  divImages.append(image);

  // creo thumbnails-item
  const thumbnailsItems = document.createElement('div');
  // creo immagine dentro al thumbnails-item
  const imgThumbnailsItems = document.createElement('img');
  // aggiungo classe thumbnails-item
  thumbnailsItems.classList.add('thumbnails-item');
  // aggiungo src immagine
  imgThumbnailsItems.src = 'img/' + imagesCarousel[i];
  // aggiungo alt img
  imgThumbnailsItems.alt = imagesCarousel[i];
  // metto l'immagine dentro alla rispettiva thumbnailsItems
  thumbnailsItems.append(imgThumbnailsItems);
  // metto ogni thumbnailsItems in html
  divThumbnails.append(thumbnailsItems);
};

// inserisco le frecce nell'html (lo faccio dopo il for per evitare lo z-index in html)
divThumbnails.append(prev, next);


// prendo tutti gli elementi di images con classe item e li inserisco in una collection
const itemsImages = document.getElementsByClassName('item');
// prendo tutti gli elementi di thumbnails con classe thumbnails-item e li inserisco in una collection
const itemsThumbnails = document.getElementsByClassName('thumbnails-item');

// rendo visibile la prima immagine
itemsImages[contCarousel].classList.add('active');
// metto active alla prima thumbnails
itemsThumbnails[contCarousel].classList.add('active');

// al click su next
next.addEventListener('click', function(){
  // tolgo la classe active dalla foto attuale
  itemsImages[contCarousel].classList.remove('active');
  // tolgo la classe active dalla thumbnails attuale
  itemsThumbnails[contCarousel].classList.remove('active');
  // se il contatore è arrivato alla fine lo rimetto all'inizio -1 per creare il loop
  if(contCarousel == (imagesCarousel.length - 1)) contCarousel = -1;
  // incremento il contatore
  contCarousel++;
  // metto la classe active sulla nuova immagine
  itemsImages[contCarousel].classList.add('active');
  // metto la classe active sulla nuova thumbnails
  itemsThumbnails[contCarousel].classList.add('active');
});

// al click su prev
prev.addEventListener('click', function(){
  // tolgo la classe active dalla foto attuale
  itemsImages[contCarousel].classList.remove('active');
  // tolgo la classe active dalla thumbnails attuale
  itemsThumbnails[contCarousel].classList.remove('active');
  // se il contatore è a 0 lo rimetto alla fine +1 per creare il loop
  if(contCarousel == 0) contCarousel = imagesCarousel.length;
  // decremento il contatore
  contCarousel--;
  // metto la classe active sulla nuova immagine
  itemsImages[contCarousel].classList.add('active');
   // metto la classe active sulla nuova thumbnails
   itemsThumbnails[contCarousel].classList.add('active');
 
});


/***** AUTOPLAY *****/
// dichiaro il flag per l'autoplay
let isAutoplay = true;

// lancio autoplay ogni 3 sec
setInterval(autoplay, 3000);

/**
 * funzione per autoplay, la parte dentro if è copia incollata dal bottone next
 */
function autoplay() {
  
  // se autoplay è vero (come di defaul)
  if(isAutoplay) {
    // tolgo la classe active dalla foto attuale
  itemsImages[contCarousel].classList.remove('active');
  // tolgo la classe active dalla thumbnails attuale
  itemsThumbnails[contCarousel].classList.remove('active');
  // se il contatore è arrivato alla fine lo rimetto all'inizio -1 per creare il loop
  if(contCarousel == (imagesCarousel.length - 1)) contCarousel = -1;
  // incremento il contatore
  contCarousel++;
  // metto la classe active sulla nuova immagine
  itemsImages[contCarousel].classList.add('active');
  // metto la classe active sulla nuova thumbnails
  itemsThumbnails[contCarousel].classList.add('active');
  }

  // se vado con il mouse sul carosello iaAutoplay diventa false e si ferma
  divCarousel.addEventListener('mouseover',function(){
    isAutoplay = false;
  });

  // se esco con il mouse dal carosello isAutoplay diventa true e ricomincia da dove si trova in quel momento
  divCarousel.addEventListener('mouseout',function(){
    isAutoplay = true;
  });

}