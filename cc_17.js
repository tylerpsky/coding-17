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


//Task 2

class Customer {
    constructor(name, totalSpent) {
      this.name = name;
      this.totalSpent = totalSpent;
    }
  }
  
  class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    addClient(customer) {
      this.clients.push(customer);
    }
  
    getClientTotal(name) {
      const client = this.clients.find(client => client.name === name);
      return client ? client.totalSpent : null; 
    }
  }