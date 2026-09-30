import type { Dispatch, SetStateAction } from 'react';
import type { IPlayer } from '../../types/players';
import PlayerCart from './PlayerCart';

interface AvailablePlayerProps{
    players: IPlayer[]
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: IPlayer[]
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>

}

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers } : AvailablePlayerProps) => {
    // console.log(players);

    return (
        <div className='grid grid-cols-3 gap-3 my-5 container mx-auto'>
            {
                players.map((player: IPlayer) => {
                    return (
                        <PlayerCart key={player.id} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></PlayerCart>
                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;