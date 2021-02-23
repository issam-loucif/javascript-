/*1
- La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
-La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie 
sur chaque élément du tableau appelant
-La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau
 d'origine qui remplissent une condition déterminée par la fonction callback.
-La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque 
valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
*/

//2  function forEach
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(avant);

function avant(item) {
    console.log(item)
  
}
//function Map

var nombres = [1, 4, 9];
var doubles = nombres.map(function(num) {return num * 2;});
console.log(doubles);



// fuction filtrer
var haroun = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}
console.log(haroun.filter(checkAdult))



//3-

var pays = ["kj", "op", "vcd"];
pays.forEach(avant);
function avant(item) {
    console.log(item)
  
}
//4

var nom = ["kj", "op", "vcd"];
nom.forEach(avant);
function avant(item) {
    console.log(item)
  
}

//5-

var nombre = [1, 5, 9];
names.forEach(avant);

function avant(item) {
    console.log(item)
  
}

//6-
var pays = ["kj", "op", "vcd"];
var P = pays.map(function(pays)
 {
  return pays.toUpperCase();
});
console.log(P);

//7-

var pays = ["kj", "op", "vcd"];
var P = pays.map(function(num)
 {
  return num.length;
});
console.log(P);


//8-
var racin = [4, 5, 1];
var P = racin.map(function(num)
 {
  return Math.sqrt(num);
});
console.log(P);


//9
var nom = ["kjggg", "op", "vcd"];
var P = nom.map(function(nom)
 {
  return nom.toUpperCase();
});
console.log(P);
//10
var words = ["land", "kkk", "landhh"];

const result = words.filter(word => word.includes("land"));

console.log(result);

//11
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length == 6);

console.log(result);
//12
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length >= 6);

console.log(result);
//13 l3ks******
var words =["hhh","azerty","wxcvbn","Em","EE","hhEk"]
const result = words.filter(word => word.indexOf("E"));
console.log(result);
//14
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: ' ' },
]
console.log(products.filter(produ=>produ.price!=" "))
//15
const numbers = [1, 2, 3, 4];
const reducer = (a , b) => a + b;
console.log(numbers.reduce(reducer));
//16
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const reducer=(a,b)=>a+" "+b+" "+"are north European countries"
console.log(countries.reduce(reducer))
//17
/*La seule différence est que la méthode some () retournera true si un prédicat est vrai alors que every () 
méthode retournera true si tous les prédicats sont vrais.*/
//18
const names = ['Max', 'Mathias', 'Elias', 'Brook']


const even = (element) => element.length >7;

console.log(names.some(even));

//19
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const even=(element) => element=="land"
console.log(countries.every(even))
//20********

//21
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const found = countries.find(element => element.length==6);

console.log(found);
//22
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']


const found = countries.findIndex(element => element.length==6);

console.log(found);
//23
var countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

var found=0;
if(found = countries.findIndex(element => element=='Norway')) 
{
  console.log(found);
}
else
{
  console.log("-1");
}
//24

var countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

var found=0;
if(found = countries.findIndex(element => element=='Roussia')) 
{
  console.log(found);
}
else
{
  console.log("-1");
}
























































































































