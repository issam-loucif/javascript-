//1 Affichez le tableau des pays sous forme de tableau.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
console.table(countries)
//2 Affichez l'objet pays sous forme de tableau.
const countries = {pays:['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']}
console.table(countries.pays)
//3  Utilisez _console.group()_ pour regrouper les journaux
const countries = {pays:['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']}
console.group(countries.pays)


