
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');


fetch(`https://striveschool-api.herokuapp.com/books`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const detailsContainer = document.getElementById('details-container');

    detailsContainer.innerHTML = `
          <img src="${data.img}" alt="Book Image">
            <h1> ${data.title} </h1>
             <p> Category: ${data.category} </p>
               <p> Price: ${data.price} € </p>
    `;
  })
  .catch((error) => 
  console.error('Error', error));









