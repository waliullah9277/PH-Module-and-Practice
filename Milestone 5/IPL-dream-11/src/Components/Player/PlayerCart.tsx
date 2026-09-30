import { useState, type Dispatch, type SetStateAction } from 'react';
import { FaUserCircle, FaTrophy } from 'react-icons/fa';
import { IoFlagSharp } from 'react-icons/io5';
import type { IPlayer } from '../../types/players';
import { toast } from 'react-toastify';

interface PlayerCartProps{
    player: IPlayer
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: IPlayer[]
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>

}

const PlayerCart = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers } : PlayerCartProps) => {

    const [isSelectd, setIsSelected] = useState(false);
    // console.log(selectedPlayers);

    const handleSelectedPlayer = () =>{
        
        const updatedCoin = coin - player.price;
        if(updatedCoin >= 0){
            setIsSelected(true);
            setCoin(updatedCoin);
            toast(`${player.playerName} is purshase Successfully!`)
        }else{
            toast.error("Your Coin is Low!!")
        }

        // selected player
        setSelectedPlayers([...selectedPlayers, player])

    }

    return (
        <div className="group">
            <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl hover:-translate-y-1">

                {/* Player Image */}
                <figure className="relative h-72 overflow-hidden bg-base-200">
                    <img
                        src={player.playerImg}
                        alt={player.playerName}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    {/* Player Type */}
                    <div className="absolute bottom-4 right-2">
                        <span className="badge badge-primary font-semibold px-2 py-3 shadow-lg">
                            {player.playerType}
                        </span>
                    </div>

                    {/* Player Name on Image */}
                    <div className="absolute bottom-4 left-5 text-purple-100">
                        <div className="flex items-center gap-2">
                            <FaUserCircle className="text-lg" />
                            <h2 className="text-xl font-bold">
                                {player.playerName}
                            </h2>
                        </div>
                    </div>
                </figure>

                {/* Card Body */}
                <div className="card-body p-5">

                    {/* Country */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-base-content/70">
                            <IoFlagSharp className="text-primary text-lg" />
                            <span className="font-medium">
                                {player.origin}
                            </span>
                        </div>

                        <div className="flex items-center gap-1 text-warning">
                            <FaTrophy />
                            <span className="text-sm font-semibold">
                                Player
                            </span>
                        </div>
                    </div>

                    <div className="divider my-2"></div>

                    {/* Skills */}
                    <div>
                        <h3 className="font-bold text-lg mb-3">
                            Player Skills
                        </h3>

                        <div className="grid grid-cols-2 gap-3">

                            {/* Batting */}
                            <div className="bg-base-200 rounded-xl p-3">
                                <p className="text-xs text-base-content/60 mb-1">
                                    Batting
                                </p>
                                <p className="font-semibold text-sm">
                                    {player.battingStyle}
                                </p>
                            </div>

                            {/* Bowling */}
                            <div className="bg-base-200 rounded-xl p-3">
                                <p className="text-xs text-base-content/60 mb-1">
                                    Bowling
                                </p>
                                <p className="font-semibold text-sm">
                                    {player.bowlingStyle}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Price + Choose */}
                    <div className="flex items-center justify-between mt-4">

                        <div>
                            <p className="text-xs text-base-content/60">
                                Player Price
                            </p>
                            <h2 className="text-xl font-bold text-primary">
                                ${player.price}
                            </h2>
                        </div>

                        <button
                            onClick={()=> handleSelectedPlayer()}
                        className="btn btn-primary rounded px-4 hover:scale-105 transition-transform" 
                        disabled={isSelectd ? true : false}>
                            {isSelectd === true ? "Selected" : "Choose Player"}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlayerCart;