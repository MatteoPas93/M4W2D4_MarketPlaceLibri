const booksApi = "https://striveschool-api.herokuapp.com/books";

let nav = document.createElement("nav");
let containerCard = document.createElement("div");
const input = document.querySelector("#search-input");

const booksHtml = () => {
  fetch(booksApi)
    .then((res) => res.json())
    .then((data) => {
      // !NAV SECTION

      nav.setAttribute("class", "container-nav");
      document.body.appendChild(nav);
      containerCard.setAttribute("class", "container-cards row");
      document.body.appendChild(containerCard);

      nav.innerHTML += ` <nav class="navbar navbar-expand-lg bg-body-tertiary">
           <div class="container-fluid">
               <a class="navbar-brand" href="#">Online Books Shop</a>
                 
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                       <ul class="navbar-nav">
                          <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Carrello
                              </a>
                            <ul class="dropdown-menu infoBook">
                               <div class="container-modal-title d-flex flex-wrap justify-content-around align-items-center>
                                 <h5 class="modal-cart-title"> Prodotti nel carrello: </h5>  
                                 <button class="modal-close"> Chiudi carrello </button> 
                               </div>                                     
                            </ul>
                          </li>
                        </ul>
                    </div>
                    <div class="search-book">
                        <input onchange="searchBooks(event)" type="search" placeholder="Search Books" id="search-input">
                    </div>
             </div>
         </nav> `;

      //!CARD SECTION

      data.map((book) => {
        containerCard.innerHTML += ` <div class="card col-4">
            <img class="book-img" src="${book.img}" alt="img libro"/>                           
                <div class="description">                        
                   <h5 class="title-book"> Title: ${book.title}. </h5>                       
                   <h6> Category: ${book.category}. </h6>                      
                   <h6 class="price-book"> Price: ${book.price}€ </h6>
                </div>                       
                <div class="button">                      
                  <div class="button-skip">
                     <button id="nascondi" onclick="nascondiCard(event)"> Nascondi </button>
                  </div>
                  <div class="button-shop">
                     <button class="shop" onclick="addCart(event); changeColor(event)"> Acquista </button>
                  </div>
          </div>`;
      });
    })
    .catch(err);
  console.log(err);
};

booksHtml();

// !RICERCA LIBRI

const searchBooks = function (searchEvent) {
  fetch(booksApi)
    .then((res) => res.json())
    .then((data2) => {
      // Creo una variabile contenente il valore dell'elemento dell'evento.
      const searchInput = searchEvent.target.value.toLowerCase();

      if (searchInput.length > 3) {
        // Filtro i titoli
        const result = data2.filter((bookSearch) =>
          bookSearch.title.toLowerCase().includes(searchInput)
        );
        if (result.length <= 3) {
          // Ciclo attraverso il forEach tutti i titoli
          result.forEach((book) => {
            containerCard.innerHTML = "";
            containerCard.innerHTML += ` <h1> Libri trovati: </h1>
              <div class="card col-4">
            <img class="book-img" src="${book.img}" alt="img libro"/>                           
                <div class="description">                        
                   <h5 class="title-book"> Title: ${book.title}. </h5>                       
                   <h6> Category: ${book.category}. </h6>                      
                   <h6 class="price-book"> Price: ${book.price}€ </h6>
                </div>                       
                <div class="button">                      
                  <div class="button-skip">
                     <button id="nascondi" onclick="nascondiCard(event)"> Nascondi </button>
                  </div>
                  <div class="button-shop">
                     <button class="shop" onclick="addCart(event)"> Acquista </button>
                  </div>
          </div> `;
          });
        }
      } else {
        containerCard.innerHTML = "<h2> Aggiungi altre informazioni </h2>";
      }
    });
};

//  !NASCONDI CARD

const cardNascosta = document.querySelectorAll(".card");

function nascondiCard(removeEvent) {
  cardNascosta.forEach((dNoneCard) => {
    dNoneCard.classList.remove("display-none");
  });

  removeEvent.target.closest(".card").classList.add("display-none");

  // !Ho visto che è possibile fare lo stesso lavoro con style.display, è una cosa corretta oppure è
  // !più corretto il metodo che ho utilizzato con classList?

  // const cardNascosta = removeEvent.target.closest(".card");
  // // console.log(cardNascosta);
  // if (cardNascosta) {
  //   cardNascosta.style.display = "none";
  // }
}

// !AGGIUNGI AL CARRELLO & CAMBIO COLORE BOTTONE SHOP

function addCart(addEvent) {
  const card = addEvent.target.closest(".card");

  // Variabili che contengono il testo da inserire nel carrello
  if (card) {
    const title = card.querySelector(".title-book").textContent;
    const category = card.querySelector(".description h6").textContent;
    const price = card.querySelector(".price-book").textContent;

    const productInfo = ` <div class="modal-text">
          <div class="modal-description">
              <p> 
                <b> - ${title} </b>, <b> ${category} </b>, <b> ${price} </b>
              </p>
          </div>
          <div class="modal-button"> 
            <button class="remove-products" onclick="removeProductCart(event)"> <b> - </b> </button>
            <button> <b> + </b> </button>
          </div>
      </div>
    `;

    const infoBookModal = document.querySelector(".infoBook");

    // Contenuto carrello

    const currentContentCart = infoBookModal.innerHTML;

    // Nuovo prodotto inserito nel carrello

    const newContent = currentContentCart + productInfo;
    infoBookModal.innerHTML = newContent;
  }
}

// !CAMBIO COLORE

const buttonColor = document.querySelectorAll(".shop");
const cardContent = document.querySelectorAll(".col-4");

function changeColor(colorEvent) {
  colorEvent.target.closest(".card").classList.toggle("color-button");
}

// !RIMUOVI DA CARRELLO

function removeProductCart(removeCartEvent) {
  const removedProduct = removeCartEvent.target.closest(".modal-text");
  if (removedProduct) {
    removedProduct.remove();
  }
}
