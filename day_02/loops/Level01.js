//1
const  generateRandomString = (num) => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result1= Math.random().toString(36).substring(num);

  return result1;
}

console.log(generateRandomString(6));
//2
function get_random_color() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
    console.log(color);
}    
//3
var 
function _fullName_()
{
  return 
}
