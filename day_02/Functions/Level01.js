
//1 Déclarez une fonction _fullName_ qui affiche votre nom complet.
function fullName()
{
    console.log("ilyass affani")
}
//2 Déclarez une fonction newFullName qui prend firstName, lastName comme paramètre et elle renvoie return votre nom complet.
function fullName(firstName,lastName)
{
    return firstName+" "+lastName
}

console.log(fullName("ilyass","affani"))
//3 Déclarez une fonction _addNumbers_ qui prend deux deux paramètres et elle renvoie *return* la somme.

function addNumbers(a,b)
{
    return a+b
}

console.log(addNumbers(5,6))
//4  Une aire d'un rectangle est calculée comme suit: _area = longueur x largeur_. Ecrivez une fonction qui calcule _areaOfRectangle_.

function areaOfRectangle(longueur , largeur)
{
return longueur*largeur
}
console.log(areaOfRectangle(14*15))
//5  Le périmètre d'un rectangle est calculé comme suit: _perimeter = 2x (longueur + largeur)_. Ecrivez une fonction qui calcule _perimeterOfRectangle_.
function perimeterOfRectangle(longueur , largeur)
{
    return (longueur+largeur)*2
}
console.log(perimeterOfRectangle(2,5))
//6 L'aire d'un cercle est calculée comme suit: _area = π x r x r_. Ecrire une fonction qui calcule _areaOfCircle

function areaOfCircle(x, r ,x, r)
{
return  Math.PI* x* r *x* r
}
console.log(areaOfCircle(1,2,1,4,1))
//7
function f(C )
{
    return (C*9/5) + 32
}
console.log(f(1))
//8
function checkSeason(m)
{

var n=m.toLowerCase();

if(n=='novembre'||n=='decembre'||n=='janvier')
{
    return 'Hiver';
}

else if(n=='mars'||n=='avril'||n=='fevrier')
{
    return 'Printemps';
}

if(n=='mai'||n=='juin'||n=='juillet')
{
    return 'Ete';
}

if(n=='out'||n=='septembre'||n=='octobre')
{
    return 'Automne';
}

}
console.log(checkSeason("out"))
//9 
function f(a,b,c)
{
    if(a>b && a>c)
    {
        console.log(a); 
    }
     if(b>a &&b>c)
    {
        console.log(b);  
    }
    if(c>a && c>b)
    {
        console.log(c);  
    }
}
console.log(f(5,10,30));




 

