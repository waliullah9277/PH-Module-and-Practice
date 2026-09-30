import { AiOutlineDollar } from 'react-icons/ai';
import Logo from '../assets/logo.png'

const Nav = ({ coin }: { coin: number }) => {
    return (
        <div className='bg-red-200'>

        <div className='flex justify-between items-center py-1 container mx-auto'>
            <img src={Logo} alt="Crickt Logo" />
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedule</li>
            </ul>
            <h2 className='font-bold text-2xl flex gap-1 items-center'><AiOutlineDollar />{coin}</h2>
        </div>
        </div>
    );
};

export default Nav;