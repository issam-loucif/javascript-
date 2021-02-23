//1
// Déclarez et initialisez les variables: firstName, lastName, country, city, age, isMarried, year et utilisez 'typeof' operator pour vérifier les différents data types.
var firstName="loucif";
var lastName="issam";
var country="maroc";

var age=23;
var isMarried =false;
var year="1997";

console.log(typeof("loucif"));
console.log(typeof("issam"));
console.log(typeof("maroc"));
console.log(typeof(23));
console.log(typeof(false));
//2
//Vérifiez si le type '10' est égal à 10
var x=false;
var y=true;
if ('10'===10)
{
console.log(y);
}
else{console.log(x)}
//3
if ('9.8'===10)
{
console.log(y);
}
else{console.log(x)}
//4
var v1=true;
var v2=true;
var v3=true;

var v4=false;
var v5=false;
var v6=false;
//5 

var a4=4;
var a3=3;
var res=true;
var res1=false;

if(a4>a3)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4>=a3)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4==a4)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4!=a4)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4!==a4)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4!==a4)
{
console.log(res)
}
else{
    console.log(res1)  
    }
if(a4!='a4')
{
console.log(res)
}
else{
    console.log(res1)  
    }

    if(a4=='a4')
{
console.log(res)
}
else{
    console.log(res1)  
    }

    if(a4==='a4')
    {
    console.log(res)
    }
    else{
        console.log(res1)  
        }
   //5/12
   var p ="paython";
   var j= "jardon";
   var r=true;
 
   console.log(p.length);
   console.log(j.length);
   if(p.length!=j.length)
   {
       r= false;
   }
   console.log(r);
   //6
   var c=true;
   var d=false;
    
    if(4>3 && 10<12)
    {
         console.log(c);
    }
    else{
        console.log(d);
    }
    //6/2

   if(4>3 || 10<12)
    {
         console.log(c);
    }
    else{
        console.log(d);
    }
    //6/3
    if(4>3 || 10>12)
    {
         console.log(c);
    }
    else{
        console.log(d);
    }
    //6/4
    if(!(4 > 3))
    {
         console.log(c);
    }
    else{
        console.log(d);
    }
    //6/5
    if(!(4 < 3))
    {
         console.log(c);
    }
    else{
        console.log(d);
    }
    //6/6
    if(!(false))
    {
         console.log(c);
    }
    else{
        console.log(d);
    }
    //6/7
    if(!(4 > 3 && 10 < 12))
    {
         console.log(c);
    }
    else{
        console.log(d);
    }
    //6/8
    if(!(4 > 3 && 10 > 12))
    {
         console.log(c);
    }
    else{
        console.log(d);
    }
    //6/9
    if(!(4 === '4') )
    {
         console.log(c);
    }
    else{
        console.log(d);
    }
    //6/11
    var d="dragon";
    var py="ython";
    if(d.match("on"))
    {
        console.log(true);
    }
    else{
        console.log(false);
    }

    if(py.match("on"))
    {
        console.log(true);
    }
    else{
        console.log(false);
    }

    
  
  //7
  //7/1
  var dd = new Date();
  console.log(dd.getFullYear()) ;
  //7/2
  console.log(dd.getMonth()) ;
  //7/3
 console.log(dd.getTime());
  //7/4
  console.log(dd.getDate()) ;
  //7/5
  console.log(dd.getHours()) ;
  //7/6
  console.log(dd.getMinutes()) ;
  //7/7
  var d1 = new Date(1970, 01, 01);
var d=new Date()

console.log((d.getTime()-d1.getTime())/1000);

  

   
