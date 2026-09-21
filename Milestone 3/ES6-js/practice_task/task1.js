// Scope Detective

// traditional function use
// function describeDeclaration(keywordName){
//     if(keywordName === 'var'){
//         return "Can redeclare, can reassign"
//     }
//     else if(keywordName === 'let'){
//         return "Cannot redeclare, can reassign";
//     }
//     else if(keywordName === 'const'){
//         return "Cannot redeclare, cannot reassign";
//     }
//     else{
//         return "Invalid";
//     }
// }

// arrow function
const describeDeclaration = (keywordName) =>{
    if(keywordName === 'var'){
        return "Can redeclare, can reassign"
    }
    else if(keywordName === 'let'){
        return "Cannot redeclare, can reassign";
    }
    else if(keywordName === 'const'){
        return "Cannot redeclare, cannot reassign";
    }
    else{
        return "Invalid";
    }
}

console.log(describeDeclaration('let'));
// console.log(describeDeclaration('let'));
// console.log(describeDeclaration('const'));
