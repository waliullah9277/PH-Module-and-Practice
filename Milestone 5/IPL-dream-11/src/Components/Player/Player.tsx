import { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../types/players';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayerProps {
    playerPromise: Promise<IPlayer[]>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

const Player = ({ playerPromise, coin, setCoin }: PlayerProps) => {
    const players = use(playerPromise)
    // console.log(players);  
    const [buttonType, setButtonType] = useState("available");

    const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([])

    const handleUpdatedButtonType = (type: "available" | "selected") => {
        setButtonType(type);
    }

    return (
        <div>
            <div className='flex justify-between container mx-auto'>
                <h2 className='font-bold text-2xl'>{buttonType === "available" ? "Availbale Players" : "Selected Players"}</h2>
                <div className='flex'>
                    <button onClick={() => handleUpdatedButtonType("available")} className={`btn btn-active ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>
                    <button onClick={() => handleUpdatedButtonType("selected")} className={`btn btn-active ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected</button>
                </div>
            </div>

            {buttonType === "available" ? <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers> : <SelectedPlayers player={selectedPlayers[0]!} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>}

        </div>
    );
};

export default Player;