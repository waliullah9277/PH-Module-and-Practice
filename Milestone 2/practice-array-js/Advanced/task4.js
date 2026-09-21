// 4. Flatten a nested array (array containing arrays) into a single flat array.
// Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]

const arr = [1, [2, 3], [4, [5, 6]]];

const results = []
function flatten(arr){
    for(const item of arr){
        if(Array.isArray(item)){
            flatten(item);
        }
        else{
            results.push(item);
        }
    }
}

flatten(arr);
console.log(results);
