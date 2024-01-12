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
                            <h5> I tuoi prodotti: </h5>                                            
                            </ul>
                            </li>
                            </ul>
                            </div>
                             <div class="search-book">
                            <input type="text" placeholder="Search Book" id="search-input">
                            </div>
                            </div>
                            </nav> `;

      //!CARD SECTION

      containerCard.innerHTML += data
        .map((book) => {
          return ` <div class="card col-4">
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
         <button id="shop" onclick="addCart(event)"> Acquista </button>
         </div>
         </div>
         </div>`;

        })
        .join("");
    });
    
};



createHtml();

// !RICERCA LIBRI




//  !NASCONDI CARD

function nascondiCard(event, call = 0) {
  if(call >= 2) {
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
  if(numeroChiamate < 2) {
  nascondiCard(event, call + 1);}
}

// !AGGIUNGI AL CARRELLO


function addCart(event) {
  fetch(booksApi)
  .then((res) => res.json())
  .then((book) => {
    console.log(book)

  document.querySelector(".infoBook img").src = book.img
  document.querySelector(".modal-title").innerHTML = book.title
  document.querySelector(".modal-price").innerHTML = book.price
  document.querySelector("#shop").addEventListener("click", function(){
    addToCart(book)
      })
    }) 

}


function addToCart(book) {
  const cartItemsContainer = document.querySelector(".infoBook")
  cartItemsContainer.innerHTML += `<li>
  <img src="${book.img}"/>
  <h6 class="modal-title"> ${book.title} </h6>
  <h6 class="modal-price"> ${book.price} </h6> 
  </li>`
}
