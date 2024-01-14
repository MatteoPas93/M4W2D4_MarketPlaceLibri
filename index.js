const booksApi = "https://striveschool-api.herokuapp.com/books";

let nav = document.createElement("nav");
let containerCard = document.createElement("div");
const input = document.querySelector("#search-input");
let total = 0 
// const totalCart = document.querySelector(".total-cart")
const booksHtml = () => {
  fetch(booksApi)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      // !FUNZIONE INPUT RICERCA LIBRO
      const searchBooks = function (search) {
        if (search.length > 3) {
          const result = data.filter((libro) =>
            libro.title.toLowerCase().includes(search)
          );
          if (result.length > 0) {
            result.map((book) => {
              containerCard.innerHTML = "";
              containerCard.innerHTML += ` 
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
          } else {
            containerCard.innerHTML = "";
            containerCard.innerHTML += `<h5> Nessun libro trovato </h5>`;
          }
        }
      };
      


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
                                                                       
                            </ul>
                          </li>
                        </ul>
                    </div>
                    <div class="search-book">
                        <input onchange="searchBooks()" type="search" placeholder="Search Books" id="search-input">
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
                     <button class="shop" onclick="addCart(event)"> Acquista </button>
                  </div>
          </div>`;
        });

        input.addEventListener("change", () => {
              searchBooks(input.value);
            });
    });
};

booksHtml();

// !RICERCA LIBRI


// Aggiungi un ascoltatore di eventi all'input per chiamare la funzione di ricerca
// input.addEventListener('input', searchBooks());

//  !NASCONDI CARD

const cardNascosta = document.querySelectorAll(".card");

function nascondiCard(removeEvent) {
  cardNascosta.forEach((dNoneCard) => {
    dNoneCard.classList.remove("display-none");
  });

  removeEvent.target.closest(".card").classList.add("display-none");

  // !Ho visto che è possibile fare lo stesso lavoro con style.display, è una cosa corretta oppure è meglio il metodo
  // ! che ho utilizzato con classList?
  // const cardNascosta = removeEvent.target.closest(".card");
  // // console.log(cardNascosta);
  // if (cardNascosta) {
  //   cardNascosta.style.display = "none";
  // }
}

// !AGGIUNGI AL CARRELLO & CAMBIO COLORE BOTTONE SHOP



function addCart(addEvent) {
  const card = addEvent.target.closest(".card");
  const buttonColor = document.querySelectorAll(".shop");
  const cardContent = document.querySelectorAll(".col-4");

  // Creo delle variabili che contengono il testo da inserire nel carrello
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
            <button> <b> - </b> </button>
            <button> <b> + </b> </button>
          </div>
         
      </div>
    `;

    const infoBookModal = document.querySelector(".infoBook");

    // Contenuto carrello

    const currentContent = infoBookModal.innerHTML;

    // Nuovo prodotto inserito nel carrello

    const newContent = currentContent + productInfo;
    infoBookModal.innerHTML = newContent;

    // Cambio colore del bottone shop

    cardContent.forEach((buttonColor) => {
      buttonColor.addEventListener("click", function () {
        buttonColor.classList.toggle("color-button");
      });
    });
    // console.log(card);
  }
}
