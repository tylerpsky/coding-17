//Task 1

addPurchase(amount) {
    if (amount > 0) {
        this.purchaseHistory.push(amount);
    } else {
        console.error("Purchase amount must be positive.");
    }
}

getTotalSpent() {
    return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
}


const customer = new Customer("John Doe", "john@example.com");
customer.addPurchase(100);
customer.addPurchase(50);
console.log(customer.getTotalSpent()); // Output: 150
