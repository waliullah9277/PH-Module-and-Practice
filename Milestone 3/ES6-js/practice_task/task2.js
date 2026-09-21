// Movie Ticket Booking

// arrow function use
const bookTicket = (movie, seats = 1, pricePerSeat = 300) => {        
    if(typeof movie !== 'string' || seats < 0 || typeof seats !== 'number' || pricePerSeat < 0 || typeof pricePerSeat !== 'number'){
        return "Invalid"        
    }
    
    let messages = `${movie}: ${seats} seat(s), Total ${seats * pricePerSeat}`
    return messages
}

console.log(bookTicket("Dune"));
console.log(bookTicket("Dune", 3));
console.log(bookTicket("Dune", 2, 450));
console.log(bookTicket(123, 2));
