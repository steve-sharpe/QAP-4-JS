// Create an object.

const customer = {
    firstName: "Hulk",
    lastName: "Hogan",
    birthYear: 1953,
    birthMonth: 8,
    birthDay: 11,
    age: function () {
        const today = new Date();
        return today.getFullYear() - this.birthYear;
    },
    gender: "male",
    roomPref: ["King", "Queen", "Double", "Suite"],
    paymentMethod: "Visa",
    paymentCardNumber: 4500252510004525,
    paymentCardExpiry: "08/25",
    paymentCardCVV: 123,
    address: {
        street: "12 Hulkster Way",
        city: "Palm Beach",
        state: "FL",
        zip: "54321",
        country: "USA"
    },
    phone: "555-555-5555",
    checkIn: {
        year: 2024,
        month: 8,
        day: 11
    },
    checkOut: {
        year: 2024,
        month: 8,
        day: 18
    },
    stayLength: function () {
        const checkIn = new Date(this.checkIn.year, this.checkIn.month, this.checkIn.day);
        const checkOut = new Date(this.checkOut.year, this.checkOut.month, this.checkOut.day);
        const length = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
        return length;
    }
};

let val;
val = 
    "The customer checking in is named " + customer.firstName + " " + customer.lastName + ". They are a " + customer.gender + ". They are " + customer.age() + " years old and are staying for " + customer.stayLength() + " days.\n\n" + "<br><br>" + "Their address is " + customer.address.street + ", " + customer.address.city + ", " + customer.address.state + ", " + customer.address.zip + ", " + customer.address.country + ". They can be reached at " + customer.phone + ".\n\n" + "<br><br>" + "Their payment method is " + customer.paymentMethod + " and their card number is " + customer.paymentCardNumber + " with an expiry of " + customer.paymentCardExpiry + " and a CVV of " + customer.paymentCardCVV + ".\n\n" + "<br><br>" +  "Their check in date is " + customer.checkIn.month + "/" + customer.checkIn.day + "/" + customer.checkIn.year + " and their check out date is " + customer.checkOut.month + "/" + customer.checkOut.day + "/" + customer.checkOut.year + ". The length of their stay is " + customer.stayLength() + " days.\n\n" + "<br><br>" + "Their room preference is " + customer.roomPref[0] + ".";

console.log(val);
document.body.innerHTML = val;

