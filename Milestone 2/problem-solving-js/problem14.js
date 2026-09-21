let student = {
    name: 'Waliullah',
    age: 26,
    University: 'GUB',
    department: 'CSE',
}

function objOperation(obj){
    // 1. print all key
    let result = '';
    for(let key in obj){
        result += key + ' ';        
    }
    console.log(result); 
    console.log('-------------------');    
    // 2. print all value
    let result2 = '';
    for(let key in obj){
        result2 += obj[key] + ' ';       
    }
    console.log(result2);    
    console.log('-------------------');  
    // 3. print key value pair
    for(let key in obj){
        console.log(key, ' : ', obj[key]);        
    }
    console.log('-------------------');
    // 4. total property count of this objects
    let keyPropertyCount = Object.keys(obj).length;
    console.log('Total Properties: ', keyPropertyCount);
    console.log('-------------------');
    // 5. check the email is exsist or not
    let isEmail = obj.hasOwnProperty('email');
    console.log("Is Email: ", isEmail);    
}

objOperation(student);