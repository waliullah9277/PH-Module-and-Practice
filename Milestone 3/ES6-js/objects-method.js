// objects method, keys, values, entries, delete, seal, freeze

// keys and values methods
const user = {
    name: 'Waliullah',
    age: 26,
    id: 10001,
}

let keys = Object.keys(user)
let values = Object.values(user)
let entries = Object.entries(user)

// console.log(keys, values, entries);

// for(elem of keys){
    //     console.log(elem, user[elem]);    
    // }

// console.log(entries);
// for(elem of entries){
//     // console.log(elem);
//     let [key, value] = elem
//     console.log(key, value);
// }

// delete methods
// delete user.name;
// delete user.age;
// console.log(user);



// seal methods
const bankInformation = {
    accountNumber: '1234567',
    accountBalance: 30000,
    accountHolder: 'Waliullah',
}

Object.seal(bankInformation); // no delete, add element not allowed, but exsiting info edit able

delete bankInformation.accountHolder;
bankInformation.nominneName = 'Tajmira';
bankInformation.accountBalance = 50000
// console.log(bankInformation);

// freeze
const birthCertificateInfo = {
    name: 'Waliullah',
    birthDate: '05-05-1999',
    certificateNo: '3439483438493',
}

Object.freeze(birthCertificateInfo) // delete, update, add not allowed

delete birthCertificateInfo.name;
birthCertificateInfo.name = 'Wali'
birthCertificateInfo.birthPlace = 'Satkhira'

console.log(birthCertificateInfo);



