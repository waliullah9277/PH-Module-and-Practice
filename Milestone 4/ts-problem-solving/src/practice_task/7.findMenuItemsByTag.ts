
interface MenuItem {
    name: string
    price: number
    tag: string
}

const findMenuItemsByTag = (menu: MenuItem[], tag: string): MenuItem[] =>{
    const searchMenuItem: MenuItem[] = menu.filter((item) => item.tag === tag);
    return searchMenuItem;
}

const menu = [
    { name: "Veggie Bowl", price: 350, tag: "vegan" },
    { name: "Tofu Wrap", price: 300, tag: "vegan" },
    { name: "Chicken Wings", price: 450, tag: "spicy" },
    { name: "Beef Burger", price: 500, tag: "spicy" }
];
 
console.log(findMenuItemsByTag(menu, "vegan")); // returns the Veggie Bowl and Tofu Wrap objects
 
console.log(findMenuItemsByTag(menu, "gluten-free")); // returns an empty array
