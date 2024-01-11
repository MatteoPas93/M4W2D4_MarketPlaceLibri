const books = "https://striveschool-api.herokuapp.com/books"

let nav = document.createElement("nav")
let containerCard = document.createElement("div")
// let containerNav = document.querySelector(".container-nav")
// let containerCard = document.querySelector(".container-card")

const createHtml = () => {
    fetch(books) 
        .then((res) => res.json())
        .then((data) => {
        console.log(data);

        nav.setAttribute("class", "container-nav");
        document.body.appendChild(nav);
        containerCard.setAttribute("class", "container-cards row");
        document.body.appendChild(containerCard);

     
       containerCard.innerHTML += data.map((book) => {
         return ` <div class="card col-4">
         <img src="${book.img}" alt="img libro"/>
         <div class="description">
         <h4> ${book.title} </h4>
         <h6> ${book.category} </h6>
         </div>
         </div>` }) 

    }) 

 }

 createHtml()
    
