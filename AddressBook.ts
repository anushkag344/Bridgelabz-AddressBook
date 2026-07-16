console.log("Welcome to Address Book Program");

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

class AddressBook {
    contact: Contact;

    constructor(contact: Contact) {
        this.contact = contact;
    }

    editContact(firstName: string): void {
        if (this.contact.firstName === firstName) {
            this.contact.address = "Dayal Bagh";
            this.contact.city = "Mathura";
            this.contact.state = "Uttar Pradesh";
            this.contact.zip = 281001;
            this.contact.phoneNumber = 9999999999;
            this.contact.email = "updated@gmail.com";

            console.log("\nContact Updated Successfully!");
        } else {
            console.log("\nContact Not Found!");
        }
    }

    displayContact(): void {
        this.contact.display();
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

let addressBook = new AddressBook(person1);

addressBook.editContact("Anushka");

console.log("\nUpdated Contact Details:");
addressBook.displayContact();