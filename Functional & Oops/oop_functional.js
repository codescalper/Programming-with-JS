//This is functional programming

var house = 1000;
var tax1 = 1.2;

function toPay(price,tax){
    return price*tax;
}

console.log(toPay(house,tax1));

//Object oriented programming


var purchase1 = {
    shoes : 100,
    tax : 1.2,
    totalPrice: function(){
        var price = this.shoes*this.tax;
        console.log(price);
    }

}
purchase1.totalPrice();

//This keyword is used to create tempelate in the object 
