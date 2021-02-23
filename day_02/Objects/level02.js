//1
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
///////////////////

//** 1. Trouvez la personne qui possède de nombreuses compétences dans l'objet users.*/


var t=0;
var y;
for(var items in users)
{

if(t<users[items].skills.length)

{
t=users[items].skills.length;
y=users[items];

}
    
}
console.log(y)





// 2. Comptez les users connectés, comptez les users ayant plus de 50 points de l'objet suivant. 


var t=0;

for(var items in users)
{

if(users[items].points>=50)
{

t++;

}
    
}
console.log(t)
//1 //1
var t=0;
var y=[];
for(var items in users)
{

if(users[items].skills.includes("MongoDB", "Express", "React", "Node"))

{
y += items + " " ;

}
    
}
console.log(y)
//2
//2
users.issam = {
  email: 'paul@paul.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
  age: 20,
  isLoggedIn: false,
  points: 40
}




//**3 - 4 */
Object.keys(users)
  .forEach(function eachKey(key)
   { 
    console.group(key); // alerts key 
    console.group(users[key]); // alerts value
  });
