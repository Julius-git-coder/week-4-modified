// let object ={
//     name : "Emmanuel",
//     email : "emma141509@gmail.com",
//     age : 20,
// }

// console.log(object);

// let car ={
//     car : "Toyota",
//     color : "sliver",
//     year : 2025,
// }
// console.log(car);

// let result ={
//     class : "First Class",
//     Name : "Addo Emmanuel",
//     Completed : 2026,
// }

// console.log(result);


class Human{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    talk(){
        console.log( this.name + 'speaks')
    }
}

class Man extends Human {
        constructor(name, age){
          super(name, age);
        }
        work() {
            console.log(`${this.name} is working.`);
          } 
      }
       
      
const man1 = new Man("John", 30);
man1.talk()
man1.work()