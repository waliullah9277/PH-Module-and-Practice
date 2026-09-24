"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canAccessOfflineMode = (tier) => {
    if (tier === "premium" || tier === "pro")
        return true;
    return false;
};
console.log(canAccessOfflineMode("free")); // false 
console.log(canAccessOfflineMode("pro")); // true 
console.log(canAccessOfflineMode("premium")); // true
//# sourceMappingURL=6.canAccessOfflineMode.js.map