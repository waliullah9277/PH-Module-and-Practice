interface LikeNotification {
    type: "like",
    fromUser: "Aisha"
}

interface SystemNotification {
    type: "system",
    // message: "Your subscription is expiring soon.",
    message: string,
    actionUrl?: "/billing"
}

const renderNotification = (notification: LikeNotification | SystemNotification):string =>{
    if(notification.type === "like"){
        return `${notification.fromUser} liked your post.`
    }else if(notification.type === "system"){
        if(notification.actionUrl === "/billing"){
            return notification.message;
        }
    }
    return notification.message;
}


console.log(renderNotification({ type: "like", fromUser: "Aisha" })); // "Aisha liked your post." 
console.log(renderNotification({ type: "system", message: "Maintenance complete." })); // "System: Maintenance complete."
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" })); // "System: Your subscription is expiring soon. (Tap to view)"
