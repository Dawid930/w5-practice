/* 
const fruits = ['apple', 'orange', 'pears'];

fruits[3] = 'grapes'; //a vegere berakja, de a lenti jobb


fruits.push('mangos') // a vegere berakja

fruits.unshift('strawberries')  // az elejere berakja

fruits.pop() // kiveszi az utolsot

console.log(Array.isArray(fruits));  //check if fruits really array or not

console.log(fruits.indexOf('orange')); // show the index nr of a particular item

console.log(fruits);



const x = 4;
const y = 10;

if(x > 5 || y > 10) {   // the sign ||  means OR; && means AND;   ?  means THEN
    console.log();
}

 */
/* 
const x = 10;

const color = x > 10 ? 'red' : 'blue';   // ?  means THEN;  : means ELSE

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
 */

obj = {
    name: "dog",
    legs: 4,
    color: "white",
}

function animal(obj){
  return "This" +" " + obj.color + " " + obj.name +  " " +"has" +  " " + obj.legs +  " " +"legs" + "."
}

  //"This" + color + name + "has" + legs + "."
// `This ${color} ${name} has ${legs}.`



