
//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    // Write your code here...
    if(typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number' || teamAGoals === null || teamBGoals === null){
        return "Invalid";
    }
    if(teamAGoals > teamBGoals){
        return "Team A Won";
    }
    else if(teamAGoals < teamBGoals){
        return "Team B Won";
    }
    else{
        return "Draw";
    }
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    // Write your code here
    if(!Array.isArray(weights)){
        return "Invalid";
    }
    let totalWeights = 0;
    for(let weight of weights){
        totalWeights += weight;
    }
    if(totalWeights <= 400){
        return true;
    }
    else{
        return false;
    }
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    // Write your code here.
    if(typeof tokensUsed !== 'number' || tokensUsed < 0){
        return "Invalid"
    }
    let rate = 5;
    let freeToken = 500;
    let extraTokenUsed = Math.floor((tokensUsed - freeToken) /100) * rate;
    if(tokensUsed > freeToken){
        return extraTokenUsed;
    }else{
        return 0;
    }
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    // Write your code here
    if(!Array.isArray(restaurants) || restaurants.length === 0){
        return "Invalid"
    }
    let mx = restaurants[0];
    // console.log(mx)
    for(let res of restaurants){
        // console.log(res.rating)
        if(res.rating > mx.rating){
            mx = res;
        }
    }
    return mx.name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) === false) { // fix assignment operator
        return "Invalid";
   }
    // handle mix array
   for(let time of times){
    if(typeof time !== 'number'){
        return "Invalid";
    }
   }

   if (times.length === 0) { // fix assignment operator
        return "Invalid";
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) { // loop start with 0
        total = total + times[i]; // fix array spelling mistake
    }

  return total / times.length; // add times.length
}

