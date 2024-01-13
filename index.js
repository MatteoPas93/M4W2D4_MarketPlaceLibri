const booksApi = "https://striveschool-api.herokuapp.com/books";

let nav = document.createElement("nav");
let containerCard = document.createElement("div");

const createHtml = () => {
  fetch(booksApi)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      nav.setAttribute("class", "container-nav");
      document.body.appendChild(nav);
      containerCard.setAttribute("class", "container-cards row");
      document.body.appendChild(containerCard);

      // !NAV SECTION

      nav.innerHTML += ` <nav class="navbar navbar-expand-lg bg-body-tertiary">
           <div class="container-fluid">
               <a class="navbar-brand" href="#">Online Books Shop</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>   
                  </button>
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
                        <input type="text" placeholder="Search Books" id="search-input">
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
    });
};

createHtml();

// !RICERCA LIBRI

const input = document.querySelector("#search-input");

//  !NASCONDI CARD

function nascondiCard(event, call = 0) {
  if (call >= 2) {
    console.error("Raggiunto massimo numero di chiamate");
    return;
  }
  const cardNascosta = event.target.closest(".card");
  console.log(cardNascosta);
  if (cardNascosta) {
    cardNascosta.style.display = "none";
  } else {
    console.error("Elemento non trovato");
  }
  if (numeroChiamate < 2) {
    nascondiCard(event, call + 1);
  }
}

// !AGGIUNGI AL CARRELLO & CAMBIO COLORE BOTTONE SHOP

function addCart(event) {
  const card = event.target.closest(".card");
  const buttonColor = document.querySelectorAll(".button-shop");

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

    buttonColor.forEach((buttonColor) => {
      buttonColor.addEventListener("click", function () {
        if (buttonColor.classList.contains("color-button")) {
          buttonColor.classList.remove("color-button");
        } else {
          buttonColor.classList.add("color-button");
        }
      });
    });
    console.log(card);
  }
}
