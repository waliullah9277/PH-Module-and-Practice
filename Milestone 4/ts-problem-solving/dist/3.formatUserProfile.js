"use strict";
// type User = {
//   name: string;
//   age: number;
//   city: string;
// };
Object.defineProperty(exports, "__esModule", { value: true });
;
// Fahim is 22 years old and lives in Dhaka.
const formatUserProfile = (user) => {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
};
console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka",
}));
//# sourceMappingURL=3.formatUserProfile.js.map