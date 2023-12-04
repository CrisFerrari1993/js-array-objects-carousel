/* Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo. */

/* Milestone 2:
Aggiungere il **ciclo infinito** del carosello.
Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto. */

// Milestone 1 + Milestone 2

// Array degli oggetti immagine
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// reference agli elementi in HTML
const itemContainer = document.getElementById("itemContainer");
const thumbnailContainer = document.getElementById("thumbnailContainer");
const buttonDown = document.getElementById("buttonDown");
const buttonUp = document.getElementById("buttonUp");

// Aggiungo immagini al DOM in modo dinamico
images.forEach(element => {
    itemContainer.innerHTML +=
        `<div class="item">
            <img src="${element.image}" alt="image">
            <div class="overImg">
                <div class="imgInfo imgTitle">${element.title}</div>
                <div class="imgInfo">${element.text}</div>
            </div>
        </div>`;

    thumbnailContainer.innerHTML +=
        `<div class="thumbnail">
            <img src="${element.image}" alt="thumb image">
        </div>`;
}
);

// inserire classe active al div dell'immagine visibile
let activePosition = 2;

const itemContainerList = document.getElementsByClassName("item");
const thumbnailsList = document.getElementsByClassName("thumbnail");

itemContainerList[activePosition].classList.add("active");
thumbnailsList[activePosition].classList.add("thumbActive");


// attivare l'evento 'click' per il buttonDown
buttonDown.addEventListener("click",

    function buttonDownFunc() {
        if (activePosition == images.length - 1) {
            //reset activePosition
            activePosition = 0;
        } else {
            //incrementare il valore di activePosition
            activePosition++;
        }

        //rimuovere la classe active dall'item attuale
        document.querySelector(".item.active").classList.remove("active");
        document.querySelector(".thumbnail.thumbActive").classList.remove("thumbActive");

        //assegnare la classe active all'item successivo
        itemContainerList[activePosition].classList.add("active");
        thumbnailsList[activePosition].classList.add("thumbActive");
    }
);

// attivare l'evento 'click' per il buttonUp
buttonUp.addEventListener("click",

    function buttonUpFunc() {
        if (activePosition == 0) {
            //reset activePosition
            activePosition = images.length - 1;

        } else {
            //incrementare il valore di activePosition
            activePosition--;
        }

        //rimuovere la classe active dall'item attuale
        document.querySelector(".item.active").classList.remove("active");
        document.querySelector(".thumbnail.thumbActive").classList.remove("thumbActive");

        //assegnare la classe active all'item successivo
        itemContainerList[activePosition].classList.add("active");
        thumbnailsList[activePosition].classList.add("thumbActive");
    }
);
