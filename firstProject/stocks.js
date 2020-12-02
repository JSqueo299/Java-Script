const startBal = 1000;
let balance = 1000;
let buyingPower = 1000;
let net = 0;

class Stock {
    constructor(name,price){
        this.name = name;                       // this. is required to overide previous value
        this.price = price;
        this.owns = 0;                          // default value
    }

    changeStockPrice(){                         // within classes, don't need the function keyword to define functions
        this.price += parseFloat(Math.random() * 20 - 10);  // += adds the function to this.price and sets as a new value
    }

    buy(quantityToBuy){
        let buyCheck = quantityToBuy * this.price;
        quantityToBuy = parseFloat(quantityToBuy);

        if (Number.isInteger(quantityToBuy) && buyCheck <= buyingPower) {
        buyingPower -= buyCheck;
        document.getElementById("buyingPower").innerHTML = buyingPower.toFixed(2);
        this.owns += quantityToBuy;
        updateStockOwn(); 
        }
        else if (Number.isInteger(quantityToBuy) == false) {
            document.getElementById("errorBox").innerHTML = "Error: quantity must be an positive integer";
        }
        else {
            document.getElementById("errorBox").innerHTML = "Error: not enough balance!";
        }
    }


    sell(quantityToSell){
        quantityToSell = parseFloat(quantityToSell);

        if (Number.isInteger(quantityToSell) && quantityToSell <= this.owns) {
        buyingPower += quantityToSell * parseFloat(this.price);
        document.getElementById("buyingPower").innerHTML = buyingPower.toFixed(2);
        this.owns -= quantityToSell;
        updateStockOwn();
        }
        else if (Number.isInteger(quantityToSell) == false) {
            document.getElementById("errorBox").innerHTML = "Error: quantity must be an positive integer";
        }
        else {
            document.getElementById("errorBox").innerHTML = "Error: not enough shares!";
        }
    }



}

const faceBookStock = new Stock('FaceBook',200); // 'new' keyword is required to create a new object inside a class stock (result is faceBookStock object)
const googleStock = new Stock('Google',300);
const twitterStock = new Stock('Twitter',100);


function updateStockOwn(){
    document.getElementById("facebookCount").innerHTML = faceBookStock.owns;
    document.getElementById("googleCount").innerHTML = googleStock.owns;
    document.getElementById("twitterCount").innerHTML = twitterStock.owns;
}


let day = 1;

function buttonStockUpdate() {
    day ++;
    document.getElementById("Daycount").innerHTML = day;

    faceBookStock.changeStockPrice(); 
    googleStock.changeStockPrice(); 
    twitterStock.changeStockPrice(); 

    document.getElementById("facebookPrice").innerHTML = "$" + (faceBookStock.price).toFixed(2); 
    document.getElementById("googlePrice").innerHTML = "$" + (googleStock.price).toFixed(2); 
    document.getElementById("twitterPrice").innerHTML = "$" + (twitterStock.price).toFixed(2); 

    let fb_net = parseFloat(faceBookStock.price)*parseFloat(faceBookStock.owns);
    let google_net = parseFloat(googleStock.price)*parseFloat(googleStock.owns);
    let twitter_net = parseFloat(twitterStock.price)*parseFloat(twitterStock.owns);
    balance =  fb_net + google_net + twitter_net;
    document.getElementById("balance").innerHTML = balance.toFixed(2);

    net = parseFloat(balance) + parseFloat(buyingPower) - parseFloat(startBal);
    document.getElementById("net").innerHTML = net.toFixed(2);
    if (net >= 0) {
        document.getElementById("net").style.color = "#228A08";
    }
    else {
        document.getElementById("net").style.color = "#E1341E";
    }
    

}







