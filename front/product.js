/*Lien en les pages*/
var str = window.location.href;
var url = new URL(str);
/*recuperation de l'id dans l'url*/
var id = url.searchParams.get("id");
console.log(id);
var couleurSelectionne = document. querySelector("#colors");
var quantiteSelectionne = document.querySelector("#quantity");

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
    
  /* Creation d'une variable pour creer une balise img */
  let imageProduit = document.createElement("img");
  /* Selection de la div container et appel de la varriable creatrice d'img */
  document.querySelector(".item__img").appendChild(imageProduit);
  /* Configuration des parametres src et alt */
  imageProduit.src = article.imageUrl;
  imageProduit.alt = article.altTxt;
  /* Variable pour cibler par son ID un element */
  let titreDuProduit = document.getElementById('title');
  /* Appel De la Variable de ciblage + creation du contenue html */
  titreDuProduit.innerHTML = article.name;
  let prixDuProduit = document.getElementById('price');
  prixDuProduit.innerHTML = article.price;
  let descriptionDuProduit = document.getElementById('description');
  descriptionDuProduit.innerHTML = article.description;
  
  /* Utilisation d'une boucle "For" pour repeter l'operation autant de fois qu'il y a de couleurs */
  for (let couleur of article.colors){
    
    /* Creation d'une variable pour creer une balise option */
    let couleurDuProduit = document.createElement("option");
    
    /* Selection de la div container et appel de la varriable creatrice d'option */
    document.querySelector("#colors").appendChild(couleurDuProduit);
    /* Création et attribution du contenu de la balise "Option" */
    couleurDuProduit.innerHTML = couleur;
    
  }
  creationpanier()
}

function creationpanier (id, quantite, couleur) {
  this.id = id;
  this.quantite = quantite;
  this.couleur = couleur;
}
var panier = new creationpanier(id, quantiteSelectionne, couleurSelectionne);
console.log(panier)

let objLinea = JSON.stringify(creationpanier);
localStorage.setItem("obj",objLinea);
