// [10-22-2020]
// Downloads:
//  https://nodejs.org/en/
// https://cli.vuejs.org/
// visual studio code
// github

/* --------------------------------------------------------------- */
// OBJECTS
const stock = {
    name: 'Facebook',
    value: 200,
    currentOwn: 3,
    changeStockValue: function(){
        this.value = 300;
    }
}

console.log(stock.value)
console.log(changeStockValue)
console.log(stock.value)

// In terminal, use 'node api/stocks.js' to see console.log output


/* --------------------------------------------------------------- */
// CLASSES
class Stock {
    constructor(name,price){
        this.name = name;                       // this. is required to overide previous value
        this.price = price;
        this.owns = 0;                          // default value
    }

    changeStockPrice(){                         // within classes, don't need the function keyword to define functions
        this.price += Math.random() * 20 - 10;  // += adds the function to this.price and sets as a new value
    }
}

const faceBookStock = new Stock('FaceBook',200); // 'new' keyword is required to create a new object inside a class stock (result is faceBookStock object)
const googleStock = new Stock('Google',300);
const twitterStock = new Stock('Twitter',100);


console.log(faceBookStock.price);
faceBookStock.changeStockPrice();     // changes the value of the stock by calling the function
console.log(faceBookStock.price);






class Dog extends Animal            // Dog inherit class Animaln

dog animal being     

/* --------------------------------------------------------------- */
// PROMISES             
                        // => arrow denotes a function, so this is shorthand for defining functions as fucntion response(){...}
setTimeout(() => {     // waits a fixed time in ms before executing code
    console.log(2);    // write '2' to the screen
},1000);               // pause time in milliseconds (1000 ms = 1 s)
console.log(1)         // If time is set to zero, then the output is still 1 first then 2 because setTimeout is a promise which is sent to a queue for execution







const data = fetch('www.websiteIwantDataFrom.com'); // get data from a website, but this is a promise that is stored in a queue that is executed after the script
// data wont' be store when script is run because sent to a queue
// Therefore, we need .then and .catch functions 

// Method 1 to fetch website data
fetch('www.websiteIwantDataFrom.com');  // this is a promise, sent to a queue, so we use .then and .catch
.then((response) => response.json())    // another promise, so need another .then and .catch
.then((data)=>console.log(data))
.catch((err)=>{                         // catch is used to catch and error and display an error message if the .then does not execute
    console.log(err);                   // err is a function we define (by the => arror then {...})
    console.log('rejected');
})


// Better way to do this. However, await is a built in function that cannot be called globally, it must be called in a function (this is soon to come to Java)
const response = await fetch'www.websiteIwantDataFrom.com'); // won't work






// To use 'await', need to use it in a function to avoid calling it globally
// BEST METHOD TO FETCH API DATA
<button onClick="getData()">Get Data</button>; //HTML - loads function on button click
<body onLoad="getData()"></body>;              //HTML - loads function

async function getData(){           // easiest way to fetch api info from websites, need an 'async function' to work with promises
    const response = await fetch'www.websiteIwantDataFrom.com'); // response is a user-defined variable that we store as a constant. await is a built-in used to get the value of the promise (from fetch)
    const data = await response.json(); // this collects the data (i.e. strings) from the json in the fetch
    return data;                   // used to output variable 'data' after function executes
}
// *** must use try{}catch{} when pulling api to catch errors and display err message







// Outputs 1,3,2 in that order due to queue
new Promise(()=>{},()=>{}).then(()=>{
    console.log(3);
})
setTimeout(() => {     
    console.log(2);    
},0)               
console.log(1);


// Outputs 1,2,3 in that order due to queue (both Promise class and setTimeout are sent to queue )
setTimeout(() => {     
    console.log(2);    
},0)       
new Promise(()=>{},()=>{}).then(()=>{
    console.log(3);
})     
console.log(1);


               









                            [10-26-2020]
/* --------------------------------------------------------------- */ 
// Create separate .js files for classes and include in main Java Script .js file
// Avoid using 'global' variables in classes, such as balance, buyingPower etc so these classes can be separate from the main Java Script file
// HTML reads in values as strings, so need parseFloat(varName) to change to a float (number)
<input type="text" id="GOOGLEbuyQuantity" placeholder="Buy Quantity"> // input box, but we use type="number" instead of type="text"


// Write functions with shorthand (arrow notation)
function buyStock(inputs){
    
}

const buyStock = (inputs) => {

}







//                              VUE         
/* --------------------------------------------------------------- */ 
/*
Vue has three parts, the HTML (<template>), the Java Script (<script>) and the CSS syling (<style>):
<template>
    HTML contents here

</template>

<script>
export default {
    Java script here
    name:'Posts',        // name of the .vue file   --> Posts.vue
    created(){           // built in function that is executed once and only once when website loads (use this to call other functions wehn website loads)

    },
    components:{

    },
    methods: {         // include functions in methods that are used multiple times (called everytime and when changed)
        myFunction (){      

        }
    },
    computed: {       // include functions in methods --> Computed properties are very handy for composing new data from existing sources, and one of the big advantages they have over methods is that their output is cached. This means that if something independent of the computed property changes on the page and the UI is re-rendered, the cached result will be returned, and the computed property will not be re-calculated, sparing us a potentially expensive operation.

    },
    watchers: {        //Watchers are useful for cases when you want to perform an action in response to a change that has occurred (for example, to a prop or to a data property). As the Vue docs mention, this is most useful when you want to perform asynchronous or expensive operations in response to changing data.

    }
}
</script>

<style scopted>
    .containter{
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px;
    }
</style>



Inside the <template> (HTML section), we can output Java script variables using double curly brackets
<h1> {{myVar}} </h1>
<p> {{post.length}} </p>

Import Post.vue files into current .vue file using:
import Post from './Post';     OR    import Post from '../Post';   (if Post.vue is in previous folder)

Now that it is imported, you can use it in your <template> (HTML):
<template>
    <Post />
</template>

BUT need to have it defined in components:
components: {
    Post            //or you can do Post: Post
}


*/
