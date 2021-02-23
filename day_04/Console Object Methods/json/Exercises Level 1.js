//1 Changer le tableau des skills en JSON en utilisant _JSON.stringify()_
console.log(JSON.stringify({skills:["html" ,"css","javascript"]}))
//1 Stringifier la variable age.
var age=21
var myJSON = JSON.stringify(age);
console.log(myJSON)
//1 Stringifier la variable isMarried.
var myJSON = JSON.stringify(isMarried )
//1  Stringifier l'objet student.
var student = {
    firstName:'daghemoum',
    lastName:'noredin',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
var myJSON = JSON.stringify(student)
console.log(myJSON)
