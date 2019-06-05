var faker = require("faker");

function list(num){
    
    var item;
    
    console.log("WELCOME TO MY STORE!");
    
    for(var i=0; i<=num; i++) {
        var name = faker.commerce.productName();
        var price = faker.commerce.price();
        
        item = name + " - $" + price;
        
        console.log(item);
    }
    
}

 list(10);