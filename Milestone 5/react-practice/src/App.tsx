import './App.css'
import Student from './StudentList';
// import Cart from './Cart'
// import User from './UserGreeting'
// import ProductCard from './ProductCard'
// import WelcomeCard from './WelcomeCard'


export interface StudentProps{
    id: number
    name: string
    grade: number
}

const students: StudentProps[] = [
    { id: 1, name: "Waliullah", grade: 85 },
    { id: 2, name: "Rahim", grade: 72 },
    { id: 3, name: "Karim", grade: 35 },
    { id: 4, name: "Jakia", grade: 91 },
    { id: 5, name: "Nusrat", grade: 38 },
];

function App() {

  return (
    <>

    <h1>Get started</h1>

    <Student students={students}></Student>






    {/* <WelcomeCard name="Waliullah" age={27} hobby="Coding"></WelcomeCard>
    <WelcomeCard name="Jakia" age={18} hobby="Reading Books"></WelcomeCard>
    <WelcomeCard name="Rahim" age={23} hobby="Gameing"></WelcomeCard> */}

    {/* <ProductCard productName='Premium Panjabi' price={1840.00} inStock={true}></ProductCard>
    <ProductCard productName='Premium Emoboidary Panjabi' price={2840.00} inStock={false}></ProductCard>
    <ProductCard productName='Premium Sublimation Panjabi' price={1540.00} inStock={true}></ProductCard>
    <ProductCard productName='Half Silk Saree' price={2340.00} inStock={false}></ProductCard> */}

    {/* <Cart itemCounts={3}></Cart> */}
    {/* <Cart itemCounts={0}></Cart> */}

    {/* <User username='Waliullah'></User>
    <User username={undefined}></User>
    <User username='Jakia Sultana'></User> */}


    </>
  )
}

export default App
