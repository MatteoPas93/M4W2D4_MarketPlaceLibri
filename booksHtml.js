// import * as utils from './utils.js'

// const booksApi = "https://striveschool-api.herokuapp.com/books";

// const nav = document.createElement("nav");
// const containerCard = document.createElement("div");
// const input = document.querySelector("#search-input");

// let nav = document.createElement("nav");
// let allCards = document.createElement("div");


// export const booksHtml = () => {
//   fetch(booksApi)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       // !NAV SECTION

//       nav.setAttribute("class", "container-nav");
//       const containerNav = document.querySelector(".container-nav")
//       containerNav.appendChild(nav);
//       allCards.setAttribute("class", "all-cards-container row");
//       const containerCards = document.querySelector(".container-cards")
//       containerCards.appendChild(allCards);

    

//       nav.innerHTML += ` <nav class="navbar navbar-expand-lg bg-body-tertiary">
//            <div class="container-fluid">
//                <a class="navbar-brand" href="#">Online Books Shop</a>
                 
//                     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//                        <ul class="navbar-nav">
//                           <li class="nav-item dropdown">
//                               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Carrello
//                               </a>
//                             <ul class="dropdown-menu infoBook">
//                                <div class="container-modal-title d-flex flex-wrap justify-content-around align-items-center>
//                                  <h5 class="modal-cart-title"> Prodotti nel carrello: </h5>  
//                                  <button class="modal-close"> Chiudi carrello </button> 
//                                </div>                                     
//                             </ul>
//                           </li>
//                         </ul>
//                     </div>
//                     <div class="search-book">
//                         <input type="search" placeholder="Search Books" id="search-input">
//                     </div>
//              </div>
//          </nav> `;

// const input = document.querySelector("#search-input");

// input.addEventListener("change", searchBooks)


//       //!CARD SECTION

//       data.map((book) => {
//         allCards.innerHTML += ` <div class="card col-4">
//             <img class="book-img" src="${book.img}" alt="img libro"/>                           
//                 <div class="description">                        
//                    <h5 class="title-book"> Title: ${book.title}. </h5>                       
//                    <h6> Category: ${book.category}. </h6>                      
//                    <h6 class="price-book"> Price: ${book.price}€ </h6>
//                 </div>                       
//                 <div class="button">                      
//                   <div class="button-skip">
//                      <button class="nascondi"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
//                      <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"/>
//                    </svg> </button>
//                   </div>
//                   <div class="button-shop">
//                      <button class="shop color"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
//                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
//                    </svg> </button>
//                   </div>
//                   <div class="button-details">
//                   <button class="details" onclick="bookDetails()"> <a href="./dettagli.html?id${book.asin}"> Dettagli </button>
//                   </div>
//         </div>`;
//       });

//       const buttonNascondi = document.querySelectorAll(".nascondi");
//       buttonNascondi.forEach(button => 
//       button.addEventListener("click", nascondiCard));

//       const buttonShop = document.querySelectorAll(".shop")
//       buttonShop.forEach(shop => 
//       shop.addEventListener("click", addCart))

//       const buttonColor = document.querySelectorAll(".color")
//       buttonColor.forEach(colored => 
//       colored.addEventListener("click", changeColor))

//     })
//     .catch(err =>
//     console.log("Error" + err));
    
// };

// booksHtml();