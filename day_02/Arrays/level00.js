//1. Déclarez un tableau vide.
var table1=[];
//2. Déclarer un tableau avec plus de 5 éléments.
var table1=["a","b","c","d","e","f","g","k"];
//3. Trouvez la longueur (length) de votre tableau.
console.log(table1.length);
//4. Obtenez le premier élément, l'élément du milieu et le dernier élément du tableau.
console.log(table1[0]);
console.log(table1[Math.floor(table1.length /2)]);
console.log(table1[table1.length - 1]);
//5. Déclarez un tableau appelé mixedDataTypes, placez différents types de données dans le tableau et recherchez la longueur du tableau. La taille du tableau doit être supérieure à 5

var mixedDataTypes=[1,"a",true,null," ",5,];
console.log(mixedDataTypes.length);
//6
var itCompanies=["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];
//7
console.log(itCompanies);
//8
console.log(itCompanies.length);
//9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length /2)]);
console.log(itCompanies[itCompanies.length - 1]);
//10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
//11

for(i=0;i<=itCompanies.length;i++)
{
    console.log(itCompanies[i].toUpperCase());
}


console.log(itCompanies.toUpperCase());
//12
console.log(itCompanies+"sont de grandes entreprises d'IT.");
//13
var key = prompt("enter here") ;
if (itCompanies.includes(key)) 
{
    console.log(key)
}
else
{
    console.log("introuvable")

//14**
//Filtrez les entreprises qui ont plus d'un 'o' sans utiliser la méthode *filter*
var itCompanies=["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"];
for(item in itCompanies )
{
     var a=itCompanies[item].includes("oo")
    console.log(a)
}

//15 Trier le tableau en utilisant la méthode sort()
 itCompanies.sort();
console.log(itCompanies);
//16
itCompanies.reverse()
console.log(itCompanies);
//17
console.log(itCompanies.slice(3));
//18
console.log(itCompanies.slice(0,4));
//19*************************

//20
delete itCompanies[0];
//21

delete itCompanies[Math.floor(itCompanies.length /2)]
//22
delete itCompanies[itCompanies(length-1)];
//23. Supprimez toutes les entreprises d'IT.*************

for(i=0;i<itCompanies.length;i++)
{
    delete itCompanies[i];
}
}