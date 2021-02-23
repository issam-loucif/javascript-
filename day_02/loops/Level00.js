//1 for 
var i=0;
var j=0;
for(i=0;i<=10;i++)
{
    console.log(i);
}
//11 while
while(i<=10)
{
    console.log(i);
    i++;
}
//1 do while
var i=0;
do{
    console.log(i);
    i++;
    
}while(i<=10);

    //2 for 
var i=0;
var j=0;
for(i=10;i<0;i--)
{
    console.log(i);
}
//2 while
while(i>=10)
{
    console.log(i);
    i--;
}
//2 do while
var i=0;
do{
    console.log(i);
    i--;

}while(i>=10);

//3
for(i=0;i<5;i++)
{
    console.log("oumayma");
}
//4
//5

var i=0;
var j=0;

for(i==0;i<=10;i++)
{
    for(j==0;j<=i;j++)
    {
        console.log(i+" * "+j +" = "+ i*j);
    }
   
}

//6

var i=0;
for(i=0;i<=10;i++)
{
    console.log(i+" "+ Math.pow(i,2)+" "+Math.pow(i,3));
}

//7  Utilisez la boucle **for** pour parcourir de 0 à 100 et n'afficher que des nombres pairs

    
for(i=0;i<=100;i++)
{
    if(i%2==0)
    {console.log(i);}
    
}*/
//8

/*for(i=0;i<100;i++)
{
    if(i%2==1)
    {console.log(i);}
    
}*/
//9


for( var i = 2; i <= 100; i++) {

var j = 1;
var racine = Math.floor(Math.sqrt(i));

do {
j++;
} while(j <= racine && i%j != 0);

if(j > racine) {

// On affiche les nombres premiers trouvés
console.log(i )

}

}
//10
var j=0;
for( var i=0;i<=100;i++)
{
    
    j+=i;

}
console.log(j)






















































































