"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Below 7
// "E (Everyone)"
// 7–12
// "E10+ (Everyone 10+)"
// 13–16
// "T (Teen)"
// 17 or above
// "M (Mature)"
const getAgeRatingAccess = (age) => {
    if (age < 7) {
        return "E (Everyone)";
    }
    else if (age >= 7 && age <= 12) {
        return "E10+ (Everyone 10+)";
    }
    else if (age >= 13 && age <= 16) {
        return "T (Teen)";
    }
    return "M (Mature)";
};
console.log(getAgeRatingAccess(5)); // "E (Everyone)"
console.log(getAgeRatingAccess(10)); // "E10+ (Everyone 10+)"
console.log(getAgeRatingAccess(15)); // "T (Teen)"
console.log(getAgeRatingAccess(20)); // "M (Mature)"
//# sourceMappingURL=1.getAgeRatingAccess.js.map