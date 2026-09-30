import type { Dispatch, SetStateAction } from "react";
import { MdDelete } from 'react-icons/md';
import type { IPlayer } from "../../types/players";

interface ISelectedPlayersCartProps {
    player: IPlayer;
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCart = ({ selectedPlayers, setSelectedPlayers, coin, setCoin, player }: ISelectedPlayersCartProps) => {

    const handleRemovePlayer = (playerToRemove: IPlayer) => {
        const remainingPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== playerToRemove.playerName);
        setSelectedPlayers(remainingPlayer);

        const updatedCoin = coin + playerToRemove.price;
        setCoin(updatedCoin);
    };

    return (
        <div className="flex items-center justify-between p-4 mb-2 border border-gray-200 rounded-xl bg-base-100">

            {/* Left Side */}
            <div className="flex items-center gap-4">

                {/* Player Image */}
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="w-[60px] h-[60px] rounded-full object-cover"
                />

                {/* Player Info */}
                <div>
                    {/* Name */}
                    <h2 className="font-bold text-lg md:text-xl">
                        {player.playerName}
                    </h2>

                    {/* Player Type */}
                    <p className="text-sm text-base-content/60 mt-1">
                        {player.playerType}
                    </p>
                </div>

            </div>

            {/* Right Side - Delete */}
            <button
                onClick={() => handleRemovePlayer(player)}
                className="btn btn-ghost btn-circle text-error hover:bg-error/10"
                title="Remove Player"
            >
                <MdDelete className="text-2xl" />
            </button>

        </div>
    );
};

export default SelectedPlayerCart;