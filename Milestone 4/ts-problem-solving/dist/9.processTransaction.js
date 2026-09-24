"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processTransaction = (balance, transaction) => {
    if (transaction.type === "deposit") {
        return balance + transaction.amount;
    }
    if (transaction.type === "withdraw") {
        if (balance < transaction.amount) {
            return "insufficient balance";
        }
    }
    return balance - transaction.amount;
};
console.log(processTransaction(5000, { type: "deposit", amount: 2000 })); // 7000
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 })); // 3000
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 })); // 5000  (unchanged)  // insufficient balance
//# sourceMappingURL=9.processTransaction.js.map