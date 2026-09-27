
interface WelcomePropsCard {
    name: string
    age: number
    hobby: string
}

function WelcomeCard({name, age, hobby}: WelcomePropsCard){
    name = "Rahim"
    return (
        <div style={{border: "1px solid red", margin: '10px'}}>
            <h1>Wel Come to React practice</h1>
            <p>Hello {name}</p>
            <p>Age: {age}</p>
            <p>My Hobby is: {hobby}</p>
            <p>Birth Year: {2026 - age}</p>
        </div>
    )
}
// function WelcomeCard(props: WelcomePropsCard){
//     // const name = 'Waliullah'
//     // const age = 27;
//     // const hobby = 'Coding';
//     return (
//         <div style={{border: "1px solid red", margin: '10px'}}>
//             <h1>Wel Come to React practice</h1>
//             <p>Hello {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>My Hobby is: {props.hobby}</p>
//             <p>Birth Year: {2026 - props.age}</p>
//         </div>
//     )
// }


export default WelcomeCard;