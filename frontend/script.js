/* console.log(a)
console.log(c) */

/* console.log("Hello")  //string mindig "" ben van
console.log('Hello')
console.log(`Hel
lo`) //tobb soros is lehet */

// console.log(typeof 2)
// console.log(typeof NaN)
// console.log(0/0)
// console.log(2.24)

// console.log(true)
// console.log(false)

// console.log(undefined) //ertekadas nem tortent meg, fuggvenyek undifiendal returnolodnek alapbol
// console.log(null)  // object helyettesito valami de objektumkent elkonyvelt valami

// console.log(typeof undefined) //
// console.log(typeof null)  //

// kulobseg az array es a obj kozott
/* 
console.log({
    "title": "Start coding",
    "type": "solo",
    "difficulty": 4.1,
    "usefullness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {
            title: "Bank accounts",
            description: "",
        },
        {
            title: "100 doors",
            description: "",
        },
        {
            title: "Word filter",
            description: "",
        }
    ]

})
 */


//variables

/* var a = "hello1";    //global scope
let b = "hello2"; //  ezt ugy csinaljuk h valtozhat kozben
const c = "hello3"; //tutira nem fogjuk megvaltoztatni

console.log(a,b,c) */

/* 
function d(){     //function scope, itt nem latszik a funct kivul 
    if(1 + 1 === 2){
        var a = "hello1"; // fv en belul a fv belul a legelso sor ele rendezodik a masik ketto a az if ala rendezodik
        let b = "hello2"; 
        const c = "hello3";

    }
    console.log(a,b,c)
}

d() */

//let, const nak van block scopja is

/* 
let e = "1"
console.log(e),  //shit + opt lefele duplikal
e = 2
console.log(e)
e = e * 2
console.log(e)
*/

/* 
function multiplyByTwo(num){
    console.log(num)
    return num * 2  // a return break-el, befejezi a kodot
}

let f = multiplyByTwo(1)
console.log(f);
console.log(multiplyByTwo(1));

 */

//metodusok

/* 
let g = {
    myMethod: function (){  //bal oldal kulcs, jobb erteke a kulcsnak
        console.log("hello");
    }
}

g.myMethod()   //. al lehet belemenni

 */


/*    ez nem mukodik csak pelda h ez megy a motorhazteto alatt
let window = {
    addEventListener: function (eventName, eventFunction){
        if (eventName === "load") {
            eventFunction()
        } 
    }
}
window.addEventListener("load", loadEvent)
 */
/* 
let h = {
    anotherMethod: function(text){
        return `you sent the following argument to this method: ${text}`
    }
}

let i = h.anotherMethod("argument")
console.log(i);

console.log(h.anotherMethod("another argument"));  // igy lehet kiiratni egybol console.loggal
 */







///                              OBJECTS

//objectumokon belul kettospontot hasznalunk, kivul egyenlosegjel

/* 
let myString = "mikkamakka";

let mySecondString = myString;

let myThirdString = "mikkamakka";

console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString);
 */

/* 
let myObject = {
    myString: 'mikkamakka'
}

let mySecondObject = myObject;

let myThirdObject = {
    myString: 'mikkamakka'
}


mySecondObject.myString = "domdodom"  //megvaltoztatta a sima myObject stringjet is!!!  KLONOS pelda!!

let myFourthObject = {...myObject}   //object masolas

myFourthObject.myString = "Vacskamati"; // itt csak kicsereli az objekten beluli valtozot

console.log(myObject.myString);
console.log(myFourthObject.myString);


console.log(myObject === mySecondObject);  // true lesz mert fentebb egyenlove tettuk a ket objektet sima '=' vel
console.log(myObject === myThirdObject);  //false lesz mert ket kulon objectnek kezeli a JS es nem lat bele

console.log(myObject.myString);

 */

/* 
console.log('' == '');
console.log({} === {});  // nem lesz egyenlo

 */







//                                                                           Itt jon DATA .js

/* 
window.addEventListener("load", function(){       //igy is lehet egybe irni a functionnal, uaz mint a lentebbi
    console.log("betoltodott 1");
})

 */

function loadEvent(){
    console.log("betoltodoott 2");
    let rootElement = document.getElementById("root")

    let card = function (movieRecieved){
        return `
        <div class="card">
            <h2>${movieRecieved.title}</h2> 
            <div class="time">${movieRecieved.year}</div>
            <div cass="rate">${movieRecieved.rate}</div>
        </div>
        `;
    };

    rootElement.insertAdjacentHTML("beforeend", card({
        "title": "Moulin Rouge",
        "year": 2001,
        "rate": 9.9
    }));

    let actuallyFavouriteMovie = {
        "title": "Eternal sunshine of a spotless mind",
        "year": 2004,
        "rate": 9.8    
    };
    
    rootElement.insertAdjacentHTML("beforeend", card(actuallyFavouriteMovie));
    rootElement.insertAdjacentHTML("beforeend", card(movies[0]));


    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card(movieSend));
    }

    console.log(movies);
}

window.addEventListener("load", loadEvent);  //a window is egy object, es ebben tortenik minden







