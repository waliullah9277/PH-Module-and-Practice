// Object Looper

const printObjectDetails = (obj, loopType) => {

    // Validation
    if (
        loopType !== 'forin' &&
        loopType !== 'forofentries' &&
        loopType !== 'entriesDestructure'
    ) {
        return "Invalid";
    }

    // for...in
    if (loopType === 'forin') {

        const result = [];

        for (let key in obj) {
            result.push(`${key}: ${obj[key]}`);
        }

        return result;
    }

    // for...of + Object.entries
    else if (loopType === 'forofentries') {

        const entries = Object.entries(obj);
        const result = [];

        for (let entry of entries) {
            result.push(`${entry[0]}: ${entry[1]}`);
        }

        return result;
    }

    // Object.entries + Array Destructuring
    else if (loopType === 'entriesDestructure') {

        return Object.entries(obj).map(([key, value]) => {
            return `${key}: ${value}`;
        });
    }
};

console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"));
console.log(printObjectDetails({fruit:"Mango",price:50}, "forofentries"));
console.log(printObjectDetails({fruit:"Mango",price:50}, "entriesDestructure"));
console.log(printObjectDetails({}, "loopThrough"));


// ['fruit: Mango', 'price: 50']
// ['fruit: Mango', 'price: 50']
// Invalid
