// 2. একটি function দিয়ে user login check করো।
const checkLogin = (
    username: string,
    password: string
): boolean => {

    if (username === "waliullah" && password === "123456") {
        return true;
    }

    return false;
};

console.log(checkLogin("waliullah", "123456"));
console.log(checkLogin("waliullah", "111111"));