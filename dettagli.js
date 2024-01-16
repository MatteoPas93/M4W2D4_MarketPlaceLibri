// const params = new URLSearchParams(location.search);
// const bookId = params.get('id');

// fetch(`https://striveschool-api.herokuapp.com/books/${bookId}`)
//   .then((res) => res.json())
//   .then((bookDetails) => {
//     // Ora hai i dettagli del libro, puoi utilizzarli come desideri
//     console.log(bookDetails);

//     // Ad esempio, puoi aggiungere il codice per visualizzare i dettagli sulla pagina
//     // Assicurati di avere elementi HTML sulla pagina per visualizzare i dettagli, e modifica il codice di seguito di conseguenza
//     const detailsContainer = document.getElementById('details-container');
//     detailsContainer.innerHTML += `
//       <h1>${bookDetails.title}</h1>
//       <p>Category: ${bookDetails.category}</p>
//       <p>Price: ${bookDetails.price}€</p>
//       <img src="${bookDetails.img}" alt="Book Image">
//       <!-- Aggiungi altri dettagli come necessario -->
//     `;
//   })
//   .catch((error) => console.error('Error fetching book details:', error));




// function bookDetails(asin) {
//   window.location.href = `./dettagli.html?id=${asin}`
// }