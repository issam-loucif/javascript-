//2
var chain=["I", "love", "teaching", 
           "and", "empowering", 
           "people", "I", "teach", "HTML",
           "CSS", "JS", "VueJs", "Laravel"]
console.log(chain.length)
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//3/1 - ajoutez 'Meat' a fin  de votre panier s'il n'a pas déjà été ajouté. *************************************
/*if('Meat'==shoppingCart)
{
    console.log("exist")
}

else
{
    console.log(shoppingCart.length.push('Meat'))
}
console.log(shoppingCart)*/

//3/2 - ajoutez 'Sugar' au début de votre panier s'il n'a pas déjà été ajouté.
if('Sugar'==shoppingCart)
{
    console.log("exist")
}

else
{
    console.log(shoppingCart.push('Sugar'))
}
console.log(shoppingCart)
//3/3 supprimez 'Honey' si vous êtes allergique au mielif(shoppingCart=='Honey')

    delete shoppingCart[(shoppingCart.length-3)]
console.log(shoppingCart)
//3/4********************************
//4   main.js
//5  main.js
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'VueJs', 'VueX']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack= frontEnd+","+backEnd
console.log(fullStack)