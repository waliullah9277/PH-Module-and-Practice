import { Suspense, useState } from "react"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Player from "./Components/Player/Player"
import type { IPlayer } from "./types/players"


const PlayerPromise = async (): Promise<IPlayer[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}



function App() {

  // const playersPromise = playersFetch();
  const [playersPromise] = useState(() => PlayerPromise());

  const [coin, setCoin] = useState(3000);

  return (
    <>
    <Nav coin={coin} />
    <Banner/>
    <Suspense fallback={<p>Loading.....</p>}>
      <Player playerPromise={playersPromise} coin={coin} setCoin={setCoin}></Player>
    </Suspense>
    </>
  )
}

export default App
