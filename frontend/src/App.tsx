import { useState } from "react";
import React from "react";
import Header from "./components/header/header";
import Player from "./components/player/player";
import MainSection from "./components/mainSection/mainSection";
import SongsFetch from "./components/serverFetch/songsFetch"; 
import type { Song } from "./components/types/types"; 
import useStyles from "./AppStyles";

export type page = 'songs' | 'favorites' | 'playlists'

const App: React.FC = () => {
  const { classes } = useStyles();
  const [currentPage, setCurrentPage] = useState<page>('songs')
  const [songs, setSongs] = useState<Song[]>([]);


  const updateCurrentPage = (newPage: page) => {
    setCurrentPage(newPage)
  }


  return (
    <div className={classes.app}>
      <Header />
      <SongsFetch onSongsLoaded={setSongs} />      
      <Player />
    </div>
  );

  
}
 
export default App;