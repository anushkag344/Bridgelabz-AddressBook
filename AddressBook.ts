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
        console.log(`${contact.firstName} Added Successfully`);
    }

    // UC2
    editContact(firstName: string, city: string): void {

        const person = this.contacts.find(
            contact => contact.firstName === firstName
        );

        if (person) {
            person.city = city;
            console.log("Contact Updated Successfully");
        } else {
            console.log("Contact Not Found");
        }
    }

    // UC3
    deleteContact(firstName: string): void {

        const lengthBefore = this.contacts.length;

        this.contacts = this.contacts.filter(
            contact => contact.firstName !== firstName
        );

        if (this.contacts.length < lengthBefore) {
            console.log("Contact Deleted Successfully");
        } else {
            console.log("Contact Not Found");
        }
    }

    // Display All Contacts
    displayContacts(): void {

        console.log("\n===== Address Book =====");

        if (this.contacts.length === 0) {
            console.log("No Contacts Available");
            return;
        }

        this.contacts.forEach(contact => contact.display());
    }
}

// ================= MAIN =================

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

console.log("\nUC1 Output");
addressBook.displayContacts();

// ================= UC2 =================

addressBook.editContact("Anushka", "Mathura");

console.log("\nUC2 Output");
addressBook.displayContacts();

// ================= UC3 =================

addressBook.deleteContact("Anushka");

console.log("\nUC3 Output");
addressBook.displayContacts();

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

console.log("\nUC4 Output");
addressBook.displayContacts();
// ================= UC5 =================
class AddressBookSystem {

    private addressBooks: Map<string, AddressBook> = new Map();

    addAddressBook(name: string): void {

        if (this.addressBooks.has(name)) {
            console.log("\nAddress Book already exists!");
            return;
        }

        this.addressBooks.set(name, new AddressBook());
        console.log(`\nAddress Book '${name}' Created Successfully`);
    }

    getAddressBook(name: string): AddressBook | undefined {
        return this.addressBooks.get(name);
    }

    displayAllAddressBooks(): void {

        console.log("\n===== All Address Books =====");

        this.addressBooks.forEach((book, name) => {

            console.log(`\nAddress Book : ${name}`);

            book.displayContacts();

        });

    }
}