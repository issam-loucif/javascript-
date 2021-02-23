//1. Créer une closure qui a une fonction interne
function init() {
    var nom = "Mozilla"; // nom est une variable locale de init
    function afficheNom() { // afficheNom est une fonction interne de init
      console.log(nom); // ici nom est une variable libre (définie dans la fonction parente)
    }
    afficheNom();
  };
  init();