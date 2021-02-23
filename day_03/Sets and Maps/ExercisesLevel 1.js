//1
const monSet = new Set([]);
//2  Créez un ensemble **set** contenant 0 à 10 en utilisant la boucle
const monSet = new Set([]);
for(var i=0;i<=10;i++)
{
    monSet.add(i);
}
console.log(monSet)
//3
monSet.delete(1)
console.log(monSet)
//4
monSet.clear()
//5 Créez un ensemble **set** de 5 éléments de chaîne à partir du tableau
const monSet = new Set([1,"kk",55," ","abc"]);
//6  Créez un dictionnaire **map** des pays et du nombre de caractères d'un pays


var pays = ["maroc", "algerie", "france"];
var nombre = pays.map(function(num) {return num.length;});
console.log(nombre);


