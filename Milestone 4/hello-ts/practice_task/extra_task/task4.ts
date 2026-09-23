// 4. nested object থেকে country বের করো।
const user: {
    name: string;
    address: {
        city: string;
        country: string;
    };
} = {
    name: "Waliullah",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(user.address.country);