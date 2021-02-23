//1 Créez une classe Animal. La classe aura les propriétés le nom (name),
// l'âge (age), la couleur (color), des jambes (legs) et créez différentes méthodes
class Animal{
    constructor( nom,prenom,age,couleur,jambes)
    {
    this.nom=nom;
    this.prenom=prenom
    this.age=age
    this.couleur=couleur
    this.jambes=jambes

    ogamanteAGE5()
    {
        age+=age+1;
    }
    afficher()
    {
        console.log("nom");
    }
        
}
    
}
//2  Créez une classe enfant Dog et Cat à partir de la classe Animal.
class enfant{
    constructor(nom, prenom, age,couleur, jambes)
    {
    this.nom= nom;
    this.prenom=prenom;
    this.age= age;
    this.couleur=couleur;
    this.jambes=jambes;
    }
}
   
class dog extends enfant{
    constructor(nom, prenom, age,couleur, jambes)
    {
     super(nom, prenom, age,couleur, jambes)
     this.b=b;

    }
    
}
class cat extends enfant{
    constructor(nom, prenom, age,couleur, jambes)
    {
     super(nom, prenom, age,couleur, jambes)
     this.c=c;

    }
    
}
