//1 Stringifier l'objet students seulement avec les propriétés: firstName, lastName et skills.

var students = {
    firstName:'daghemoum',
    lastName:'noredin',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

var myJSON = JSON.stringify(students.firstName,students.lastName);
console.log(myJSON )