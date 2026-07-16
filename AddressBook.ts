console.log("Address Book System");
class Contact {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: number;
    email: string;
    constructor(
        firstName: string,
        lastName: string,
        address: string,
        city: string,
        state: string,
        zip: number,
        phoneNumber: number,
        email: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    display(): void {
        console.log("\n----- Contact Details -----");
        console.log("First Name :", this.firstName);
        console.log("Last Name  :", this.lastName);
        console.log("Address    :", this.address);
        console.log("City       :", this.city);
        console.log("State      :", this.state);
        console.log("Zip        :", this.zip);
        console.log("Phone No   :", this.phoneNumber);
        console.log("Email      :", this.email);
    }
}

let person1 = new Contact(
    "Anushka",
    "Gupta",
    "Kamla Nagar",
    "Agra",
    "Uttar Pradesh",
    282005,
    9876543210,
    "anushka@gmail.com"
);
person1.display();