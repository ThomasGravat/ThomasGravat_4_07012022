async function requeteAPI() {
  await fetch("http://localhost:3000/api/products/")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (valeurapi) {
      console.log(valeurapi);
      affichage(valeurapi);
    })
    .catch(function (err) {
      container.innerHTML = `<p>Une erreur est survenue lors du chargement des produits!</p>`
    });
}
requeteAPI();

var container = document.getElementById("items");

function affichage(produits) {
  container.innerHTML += produits.map(
    (product) => 
    `<a href="./product.html?id=${product._id}">
        <article>
          <img src="${product.imageUrl}" alt="${product.altTxt}">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
    </a>`);
}