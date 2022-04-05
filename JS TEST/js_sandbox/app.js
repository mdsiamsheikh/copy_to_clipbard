class Person {
    constructor(fiestName, lasrName) {
        this.fiestName = fiestName;
        this.lasrName = lasrName;
    }

    greeting() {
        return `Hello there ${this.fiestName} ${this.lasrName}`;
    }
}

class Customer extends Person {
   constructor(fiestName, lasrName, phone, membership) {
      super(fiestName, lasrName);

      this.phone = phone;
      this.membership = membership;
   }

   static getMembershipCost() {
       return 500;
   }
}

const siam = new Customer('Siam', 'Sheikh', '555-333-5555', 'standerd');

console.log(siam.greeting());

console.log(Customer.getMembershipCost());