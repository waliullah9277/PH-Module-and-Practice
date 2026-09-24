// class Student {
//     name: string
//     email: string
//     age: number
//     marks: number

//     // cosntructor 
//     constructor(name: string, email: string, age: number, marks: number){
//         this.name = name
//         this.email = email
//         this.age = age
//         this.marks = marks
//     }

//     // method
//     printValue():string{
//         return `Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nMarks: ${this.marks}`
//     }
// }


// const wali = new Student("Waliullah", "waliullah@gmail.com", 26, 101)
// const jakia = new Student("Jakia", "jakia@gmail.com", 18, 150)

// console.log(wali.printValue());
// console.log('------------------');
// console.log(jakia.printValue());


/**
 * title
 * soldItems
*/

class TeaShop{
    title: string
    soldItems:any = []

    constructor(title: string){
        this.title = title
    }

    buyItems(name: string, price: number){
        this.soldItems.push({name, price});
    }

    totalSoldItems(){
        const total = this.soldItems.reduce((acc, item) => acc + item.price, 0);
        return total;
    }
}

const shop1 = new TeaShop("Amar Tea Shop");
shop1.buyItems("Black Tea", 10);
shop1.buyItems("Milk Tea", 20);
shop1.buyItems("Cake", 15);
console.log(shop1);
console.log(shop1.totalSoldItems());




