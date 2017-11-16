var app = (function init(){

var tab = [];
var Produit = function Produit(nom, prix, description) {
  this.nom = nom;
  this.prix = prix;
  this.description = description;
};


var ajouterProduit = function() {

  var txt = document.getElementById("ajout_nom_prod").value;
  var txt2 = document.getElementById("ajout_prix_prod").value;
  var txt3 = document.getElementById("ajout_description_prod").value;
  document.getElementById("my_list").innerHTML += "<li>" + txt + "</li>";
  tab.push(txt, txt2, txt3);

};

function randomNumber() {
  var min = 1;
  var max = 9999999999;
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  var timeNow = new Date().getTime();
  document.getElementById('ajout_ref_prod').value = num + timeNow;
}

window.onload = function init(){

  randomNumber();
}

  return {
    ajouterProduit: ajouterProduit
  };





  //
  // function afficherProduitSup(){
  //
  //   document.getElementById("listesup").innerHTML +="<li>" + txt + "</li>";
  //
  // }


  // etagere = new Produit ("Kallax", 35, "lkjkj");
  // tapis = new Produit("Adum", 50, "JGjhguh");
  // commode = new Produit("Malm" 125, "jkhkjhg");
  // table = new Produit("Linnmon", 29.50, "hfgfhgf");


}());
