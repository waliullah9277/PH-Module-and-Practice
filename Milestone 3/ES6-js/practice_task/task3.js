// Receipt Generator

const generateReceipt = (customerName, items, total) => {
    if(!Array.isArray(items) || items.length === 0){
        return "Invalid";
    }
    return `
        Receipt for ${customerName}
        Items: ${items.join(',')}
        Total: ৳${total}    
    `
}

console.log(generateReceipt("Rakib", ["Pen","Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));
console.log(generateReceipt("Tanvir", [], 0));
