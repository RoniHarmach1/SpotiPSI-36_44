import { useState } from "react";
import useStyles from "./AppStyles";
import React from "react";
import Header from "./components/header/header";
import Player from "./components/player/player";
import SongsFetch from "./components/serverFetch/songsFetch"; 
import type { Song, page } from "./components/types/types"; 
import MainSection from "./components/mainSection/mainSection";


interface SongsFetchProps {
    page: page;
}


const App: React.FC<SongsFetchProps> = ({page}) => {
  const { classes } = useStyles();
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentPage, setCurrentPage] = useState<page>('songs')
  const [favoriteSongsId, setfavoriteSongsId] = useState<number[]>([]);

  console.log(currentPage);

  return (
    <div className={classes.app}>
      <Header />
      <MainSection currentPage={currentPage} songs={songs} favoriteSongsId={favoriteSongsId} setCorrentPageFunc={setCurrentPage} />
      <SongsFetch onSongsLoaded={setSongs} page={currentPage}  />      
      <Player />
    </div>
  )
}

export default App;