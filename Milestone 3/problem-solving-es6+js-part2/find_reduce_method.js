/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/

const findUserById = (users, id) => {
    // console.log(users);  
    const findUser = users.find((user) =>{
        // console.log(user);   
        return user.id === id   
    })  
    // console.log(findUser);    
    if(findUser){
        return findUser;
    }else{
        return "User Not Found!";
    }
}

let users = [
  { id: 1, name: "Rafi" },
  { id: 2, name: "Karim" },
  { id: 3, name: "Utsho" },
  { id: 4, name: "Rahim" },
];

// console.log(findUserById(users, 3));
// console.log(findUserById(users, 33));


/*
  Problem 2: Shopping Cart Total (reduce)
  getCartTotal(cart) — sum price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/

const getCartTotal = (cart) => {
    // console.log(cart);   
    const cartTotal = cart.reduce((accumulator, elem) => {
        // console.log(accumulator, elem);        
        return accumulator + (elem.price * elem.qty);
    }, 0) 
    return cartTotal;
}

let cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Notebook", price: 50, qty: 2 },
  { name: "Speaker", price: 500, qty: 2 },
  { name: "Perfume", price: 2500, qty: 1 },
];


let cart2 = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Notebook", price: 50, qty: 2 },
];

console.log(getCartTotal(cart));
console.log(getCartTotal(cart2));
