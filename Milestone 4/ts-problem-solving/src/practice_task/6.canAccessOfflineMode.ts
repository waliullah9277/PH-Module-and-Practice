type Tier = "free" | "pro" | "premium";

const canAccessOfflineMode = (tier: Tier):boolean =>{
    if(tier === "premium" || tier === "pro") return true;
    return false;
}

console.log(canAccessOfflineMode("free")); // false 
console.log(canAccessOfflineMode("pro")); // true 
console.log(canAccessOfflineMode("premium")); // true
