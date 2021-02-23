const countries = [
    'USA',
    'Canada',
    'Denmark',
    'Algeria',
    'Tunisia',
    'Germany',
    'China',
    'Morocco',
    'Ireland',
    'Japan',
    'France'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'MySQL',
  'Node',
  'Bootstrap'
]
//4 **
if(countries=='Morocco')
{
  console.log("exist")
}
else
{
  console.log(countries.push('Morocco'))
}
console.log(countries)
//5 **
if(webTechs =="Sass")
{
  console.log("Sass est un préprocesseur CSS")
}
else{console.log(webTechs.push('Sass '))}
console.log(webTechs)
