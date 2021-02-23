//1 **
/*let url="";
fetch(url)
.then(function(responce)
{
    console.log(responce)
}).catch(function(error){
    console.error(error)
})
console.log("hello")*/



const API_URL="https://restcountries.eu/rest/v2/all"
fetch(API_URL).then(res=>{
    res.json().then(data=>console.log(data))
})
