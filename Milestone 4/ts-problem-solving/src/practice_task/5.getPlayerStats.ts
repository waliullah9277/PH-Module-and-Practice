interface Player {
    name: string
    scores: number[]
}

interface Result {
    name: string
    average: number
    rank: string
}

const getPlayerStats = (player: Player):Result =>{
    const playerScores: number[] = player.scores;
    const totalScores: number = playerScores.reduce((sum, score) => sum + score, 0)
    const average: number = totalScores / playerScores.length;
    const rank: string = average >= 80 ? "MVP" : "Rookie";
    return {
        name: player.name,
        average,
        rank
    }
}

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
