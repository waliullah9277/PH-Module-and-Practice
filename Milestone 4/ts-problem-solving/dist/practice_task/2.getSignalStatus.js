"use strict";
// 0–20
// "Weak"
// 21–50
// "Fair"
// 51–80
// "Good"
// 81–100
// "Excellent"
Object.defineProperty(exports, "__esModule", { value: true });
const getSignalStatus = (strength) => {
    if (strength >= 0 && strength <= 20) {
        return "Weak";
    }
    else if (strength >= 21 && strength <= 50) {
        return "Fair";
    }
    else if (strength >= 51 && strength <= 80) {
        return "Good";
    }
    return "Excellent";
};
console.log(getSignalStatus(10));
console.log(getSignalStatus(35));
console.log(getSignalStatus(65));
console.log(getSignalStatus(95));
// "Weak"
// "Fair"
// "Good" 
// "Excellent"
//# sourceMappingURL=2.getSignalStatus.js.map