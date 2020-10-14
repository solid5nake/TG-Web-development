function ClubInfo(club, type, members, contactInfo) {
  this.clubName = club;
  this.typeSport = type;
  this.countMembers = members;
  this.contactInfo = contactInfo;
}

function ContactInfo(address, phone, contact) {
  address = address;
  phoneNumber = phone;
  contact = contact;
}


// Opdracht 3

const clubs = [
  {club: "Ajax"},
  {club: "PSV"},
  {club: "Feyenoord"},
  {club: "Vitesse"}
]

const printClubs = (clubList) => {

  for (i = 0; i < clubList.length; i++) {
    let val = clubList[i];
    console.log(val.club);
    document.getElementById("soccer").innerHTML += `<li>${val.club}</li>`;
  }
} 

const marco = new ContactInfo("Osdorpplein 5", "020-6991234", "Marco van Basten")
const myClub = new ClubInfo("dws", "voetbal", "95", "marco");

// Opdracht 4

function Person(name, age) { 
  this.name = name; 
  this.age = age; 
} 

const persons = [ 
  new Person ("Jan", 24), 
  new Person ("Klaas", 15), 
  new Person ("Yanis", 42), 
  new Person ("Rupel", 55), 
  new Person ("Hendrik", 32), 
  new Person ("Mono", 28), 
  new Person ("West", 23)
]

 persons.sort((a,b) =>  a.age-b.age);


// Opdracht 5
// object literal (initializer notation)
const person = {name: "Erika", age: 26};

// Opdracht 6
class Person6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const persons6 = [ 
  new Person6 ("Jan", 24), 
  new Person6 ("Klaas", 15), 
  new Person6 ("Yanis", 42), 
  new Person6 ("Rupel", 55), 
  new Person6 ("Hendrik", 32), 
  new Person6 ("Mono", 28), 
  new Person6 ("West", 23)
]




