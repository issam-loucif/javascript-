//1  Utilisez console.log() et afficher la déclaration suivante:
console.log("```sh \n The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.\n``` ")
//2  Utilisez console.log() et afficher la citation suivante:

console.log(` "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
//3
//Vérifiez si typeof '10' est exactement égal à 10. Sinon, rendez-le exactement égal.

if(typeof('10')==typeof(10))
{
  console.log("equal");
}
else
{console.log("not equal");}
//4
//Vérifiez si parseFloat('9.8') est exactement égal à 10 if not make it exactly equal with 10.
if(parseFloat('9.8')==(typeof(10)))
{
    console.log("equal");
}
else 
{
    console.log("not equal");
}

//5
//Vérifiez si 'on' is found in both python and  jargon
var p="python";
var j="jargon";
if(p.match("on"))
{
console.log("exist")
}
else 
{
    console.log(" not exist")
}

if (j.match("on"))
{
console.log("exist")
}
else 
{
    console.log(" not exist")
}

//6
//_I hope this course is not full of jargon_. Vérifiez si _jargon_ est dans la chaine.
var ch="I hope this course is not full of jargon";

if(ch.match("jargon"))
{
console.log("exist")
}
else
(console.log("exist"));

//7  Générer un nombre aléatoire entre 0 et 100 inclusivement.
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entier = entierAleatoire(0, 100);
console.log(entier);
//8 Générer un nombre aléatoire entre 50 et 100 inclusivement.
var entier = entierAleatoire(50, 100);
console.log(entier);
//9  Générez un nombre aléatoire compris entre 0 et 255 inclusivement. 
var entier = entierAleatoire(0, 255);
console.log(entier);

//11 
console.log("1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125");
//12*******************************************************************************
var bec='You cannot end a sentence with because because because is a conjunction'
console.log(bec.search("because"));
var a=bec.search("because");
console.log(bec.substring("a"));
