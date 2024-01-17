

// function bookDetails(asin) {
//   window.location.href = `./dettagli.html?id=${asin}`
// }



const params = new URLSearchParams(location.search);
const bookId = params.get('id');
const buttonDetails = document.querySelector(".details")

function details() { 
 fetch("https://striveschool-api.herokuapp.com/books/" + bookId)
 .then((res) => res.json())
 .then((data) => {
   console.log(data);
   
   const detailsContainer = document.querySelector('#details-container');

   detailsContainer.innerHTML = `
         <img class="img-dettagli" src="${data.img}" alt="Book Image">
           <h1> ${data.title} </h1>
            <p> Category: ${data.category} </p>
              <p> Price: ${data.price} € </p>
   `;
 })
 .catch((error) => 
 console.error('Error', error));
}

details();








