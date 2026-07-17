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

    contact: Contact | null;
    constructor(contact: Contact) {
        this.contact = contact;
    }
    // UC2 - Edit Contact
    editContact(
        firstName: string,
        address: string,
        city: string,
        state: string,
        zip: number,
        phoneNumber: number,
        email: string
    ): void {

        if (this.contact && this.contact.firstName === firstName) {

            this.contact.address = address;
            this.contact.city = city;
            this.contact.state = state;
            this.contact.zip = zip;
            this.contact.phoneNumber = phoneNumber;
            this.contact.email = email;

            console.log("\nContact Updated Successfully!");
        } else {
            console.log("\nContact Not Found!");
        }
    }
    // UC3 - Delete Contact
    deleteContact(firstName: string): void {

        if (this.contact && this.contact.firstName === firstName) {

            this.contact = null;
            console.log("\nContact Deleted Successfully!");

        } else {

            console.log("\nContact Not Found!");

        }
    }
    displayContact(): void {

        if (this.contact) {
            this.contact.display();
        } else {
            console.log("\nNo Contact Available.");
        }

    }
}
// ================= UC1 =================

const person1 = new Contact(
    "Anushka",
    "Gupta",
    "Kamla Nagar",
    "Agra",
    "Uttar Pradesh",
    282005,
    9876543210,
    "anushka@gmail.com"
);

const addressBook = new AddressBook(person1);

console.log("\nUC1 : Contact Added Successfully");
addressBook.displayContact();


// ================= UC2 =================

addressBook.editContact(
    "Anushka",
    "Dayal Bagh",
    "Mathura",
    "Uttar Pradesh",
    281001,
    9999999999,
    "updated@gmail.com"
);

console.log("\nUC2 : Updated Contact Details");
addressBook.displayContact();


// ================= UC3 =================

addressBook.deleteContact("Anushka");

console.log("\nUC3 : Contact List After Delete");
addressBook.displayContact();