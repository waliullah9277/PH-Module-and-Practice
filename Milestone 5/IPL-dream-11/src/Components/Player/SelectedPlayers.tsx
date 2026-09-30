import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/players";


import SelectedPlayerCart from "./SelectedPlayerCart";

interface ISelectedPlayersProps {
    player: IPlayer
    selectedPlayers: IPlayer[],
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }: ISelectedPlayersProps) => {
    console.log(selectedPlayers);

    if (selectedPlayers.length === 0) {
        return (
            <h2 className="font-bold text-3xl my-30 text-center text-red-500">
                No selected players
            </h2>
        );
    }

    return (
        <div className='container mx-auto py-20'>
            {
                selectedPlayers.map((selectedPlayer: IPlayer) => {
                    return (
                        <SelectedPlayerCart
                            key={selectedPlayer.id}
                            player={selectedPlayer}
                            coin={coin}
                            setCoin={setCoin}
                            selectedPlayers={selectedPlayers}
                            setSelectedPlayers={setSelectedPlayers}
                        />
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;