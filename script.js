/// uber price
class uberprice{
    constructor(kilometer,price=50){
        this.kilometer=kilometer;
        this.Price = price 
   }
   get price(){
    return this.kilometer*this.Price
   }
}
var uber1 = new uberprice(5)
console.log(uber1.price)

//  Write a “person” class to hold all the details.
class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
  }

}
let person1 = new Person('vengat', 'g', 21, 'male', ['coding', 'hiking', 'reading']);
person1.greeting();
