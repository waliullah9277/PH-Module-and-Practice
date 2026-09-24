interface Player {
    username: string
    level: number
    region: string
}

const formatPlayerCard = (player: Player): string =>{
    return `${player.username} is a Level ${player.level} player from ${player.region}.`
}

console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}));
