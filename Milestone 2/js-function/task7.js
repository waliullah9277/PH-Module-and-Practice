// temparature calculte
// F = (C × 9/5) + 32

function temparatureCalculte(c){
    const f = (c * 9/5) + 32;
    return f;
}

const result = temparatureCalculte(30);
console.log(result);