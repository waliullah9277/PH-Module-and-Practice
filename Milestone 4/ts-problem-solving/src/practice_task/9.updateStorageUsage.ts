
interface Action {
    type: "upload" | "delete"
    sizeMB: number
}

const updateStorageUsage = (currentUsageMB: number, action: Action):number =>{
    if(action.type === "upload"){
        return currentUsageMB + action.sizeMB;
    }
    if(action.type === "delete"){
        if(currentUsageMB < action.sizeMB){
            return 0;
        }
    }

    return currentUsageMB - action.sizeMB;

}

console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 })); // 2500 
console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 })); // 1200 
// usage floor at zero:
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 })); // 0
