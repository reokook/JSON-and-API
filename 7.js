
function calculateTotalRevenue(jsonObject) {
    return jsonObject.products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
}


const products = {
    "products": [
        { "name": "pc", "price": 1000, "quantity": 5 },
        { "name": "phone", "price": 700, "quantity": 10 },
        { "name": "Headphones", "price": 100, "quantity": 20 },
        { "name": "Monitor", "price": 300, "quantity": 7 }
    ]
};

console.log(calculateTotalRevenue(products)); 

