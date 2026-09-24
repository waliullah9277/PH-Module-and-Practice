"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPlayerStats = (player) => {
    const playerScores = player.scores;
    const totalScores = playerScores.reduce((sum, score) => sum + score, 0);
    const average = totalScores / playerScores.length;
    const rank = average >= 80 ? "MVP" : "Rookie";
    return {
        name: player.name,
        average,
        rank
    };
};
console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
}));
// Expected output:
// { name: "Nova", average: 87.5, rank: "MVP" }
// another example:
console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
}));
// Expected output:
// { name: "Zex", average: 58.75, rank: "Rookie" }
//# sourceMappingURL=5.getPlayerStats.js.map