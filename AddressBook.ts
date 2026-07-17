console.log("Welcome to Address Book Program");

class Contact {
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public city: string,
        public state: string,
        public zip: number,
        public phoneNumber: number,
        public email: string
    ) {}

    display(): void {
        console.log("----------------------------");
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

    private contacts: Contact[] = [];

    // UC1 & UC4
    addContact(contact: Contact): void {
        this.contacts.push(contact);
        console.log(`${contact.firstName} added successfully.`);
    }

    // UC2
    editContact(firstName: string, city: string): void {

        const person = this.contacts.find(
            contact => contact.firstName === firstName
        );

        if (person) {
            person.city = city;
            console.log("Contact Updated Successfully!");
        } else {
            console.log("Contact Not Found!");
        }
    }

    // UC3
    deleteContact(firstName: string): void {

        this.contacts = this.contacts.filter(
            contact => contact.firstName !== firstName
        );

        console.log("Contact Deleted Successfully!");
    }

    displayContacts(): void {

        console.log("\n===== Address Book =====");

        this.contacts.forEach(contact => contact.display());

    }
}
// Create Address Book
const addressBook = new AddressBook();
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

addressBook.addContact(person1);
// ================= UC2 =================
addressBook.editContact("Anushka", "Mathura");
// ================= UC3 =================
// ================= UC4 =================
const person2 = new Contact(
    "Rahul",
    "Sharma",
    "MG Road",
    "Delhi",
    "Delhi",
    110001,
    9876543211,
    "rahul@gmail.com"
);

const person3 = new Contact(
    "Priya",
    "Singh",
    "Civil Lines",
    "Lucknow",
    "Uttar Pradesh",
    226001,
    9876543212,
    "priya@gmail.com"
);

addressBook.addContact(person2);
addressBook.addContact(person3);

addressBook.displayContacts();