import { useState } from "react";
import useStyles from "./AppStyles";
import React from "react";
import Header from "./components/header/header";
import Player from "./components/player/player";
import SongsFetch from "./components/serverFetch/songsFetch"; 
import type { Song } from "./components/types/types"; 
import MainSection from "./components/mainSection/mainSection";


const App: React.FC = () => {
  const { classes } = useStyles();
  const [songs, setSongs] = useState<Song[]>([]);

  return (
    <div className={classes.app}>
      <Header />
      <MainSection songs={songs} />
      <SongsFetch onSongsLoaded={setSongs} />      
      <Player />
    </div>
  )
}

export default App;