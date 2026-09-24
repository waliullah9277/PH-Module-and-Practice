interface Tracks {
    title: string
    minutes: number
}

const calculateTotalListeningTime = (tracks: Tracks[]):number =>{
    const totalTracksMinutes: number = tracks.reduce((sum, item) => sum + item.minutes, 0);
    return totalTracksMinutes;
}

const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
console.log(calculateTotalListeningTime(tracks)); // 10
 
// another example:
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
console.log(calculateTotalListeningTime(tracks2)); // 7
