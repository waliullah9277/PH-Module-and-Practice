
interface TodoPropsType {
    task: string,
    time?: string
}

function Todo({task, time}: TodoPropsType){
    return(
        <li>Task: {task} at: {time} </li>
    )
}

// function Todo(props: TodoPropsType){
//     return(
//         <li>Task: {props.task} at: {props.time} </li>
//     )
// }

// function Todo(props){
//     return(
//         <li>Task: {props.task} at: {props.time} </li>
//     )
// }

export default Todo;