
//1
   let myAge = 250;
   let yourAge = 25;
   console.log( "J\'ai" +" "+myAge+" "+"ans"+" "+"de plus que toi");
//2
var dn=parseInt( prompt("entrer ton annee de naissance"));
var d=new Date();
var d1=parseInt(d.getFullYear()) ;
var dd=d1-dn;
var dif;

if(d1-dn<=18)
{
dif=18-d1+dn;

    console.log("Vous avez "+dd+ "ans. Vous serez autorisé à conduire après"+dif+" ans" );
}

else
{
    
    console.log("Vous avez"+ dd+" ans. Vous êtes autorisé de conduire.");
}
//3
var s=parseInt(prompt("entrer un nombre d'annee: "));

if(s<=100)
{

    var res=100*365*24*60*60;
    console.log("vous etes vive"+res+" sec");

}

else{
    console.log("personne ne depasse 100 ans")
}

//4
var dt = new Date();

console.log(`${
    (dt.getMonth()+1).toString().padStart(2, '0')}/${
    dt.getDate().toString().padStart(2, '0')}/${
    dt.getFullYear().toString().padStart(4, '0')} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`
);

