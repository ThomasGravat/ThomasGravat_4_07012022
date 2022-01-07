/*Lien en les pages*/
var str = window.location.href;
var url = new URL(str);
/*recuperation de l'id dans l'url*/
var id = url.searchParams.get("id");
console.log(id);

fetch("http://localhost:3000/api/products/" + id)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
    /*Appel de la fonction d'insertion des elements*/
    insertion(value)
  })
  .catch(function(err) {
    console.log("Error")
  });

function insertion(article){
    /*Creation d'une variable pour creer une balise img*/
    let imageProduit = document.createElement("img");
    /*Selection de la div container et appel de la varriable creatrice d'img*/
    document.querySelector(".item__img").appendChild(imageProduit);
    /*Configuration des parametres src et alt*/
    imageProduit.src = article.imageUrl;
    imageProduit.alt = article.altTxt;

    
  }
  /*requeteAPI()
function getPost(article){
    // Insertion de l'image
    let productImg = document.createElement("img");
    document.querySelector(".item__img").appendChild(productImg);
    productImg.src = article.imageUrl;
    productImg.alt = article.altTxt;}*/