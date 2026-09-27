import Todo from './todo';
import './App.css'

function App() {

  return (
    <>
      <h1>My React App</h1>
      <Todo task='react video watching' time='2:00pm'></Todo>
      <Todo task='react practice after watching the video' time='4:00pm'></Todo>
      <Todo task='after practicing the rest the day'></Todo>
      {/* <Student name="Waliullah" grade='3.69'></Student>
      <Student name='Jakia' grade='3.50'></Student>
      <Student name='Rahim' grade='2.69'></Student> */}
      {/* <Developer langauge='JavaScript' exprience='10'></Developer>
      <Developer langauge='Python' exprience='7'></Developer>
      <Developer langauge='Java' exprience='5'></Developer> */}

    </>
  )
}


function Developer(props){
  return (
    <div className='student'>
      <h2>Langauge: {props.langauge} </h2>
      <p>Years of Expriences: {props.exprience} </p>
    </div>
  )
}

function Student(props){
  console.log("inside the student components", props);  
  const studentStyle = {
    border: '2px solid green',
    borderRadius: '10px',
    margin: '5px'
  }

  return(
    <div style={{
    border: '2px solid cyan',
    borderRadius: '10px',
    margin: '5px'
  }}>
      <h2>Name: {props.name}</h2>
      <h5>Grade: {props.grade} </h5>
      <p>Todays Learning Basics React</p>
    </div>
  )
}


function Person(){
  return (
    <h1>John Doe</h1>
  )
}

function Gadget(){
  return (
    <>
    <p>Gadget</p>
    <h5>iPhone 14</h5>
    <h4>iPhone 14 Pro {120000+40000}</h4>
    </>
  )
}

export default App
