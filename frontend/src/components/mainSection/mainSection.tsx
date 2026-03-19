import type { Song } from "../types/types";
import PageContent from "./pageContent/pageContent";
import SideBar from "./sideBar/sideBar"
import React from "react";
import { useState } from "react";
import useStyles from "./mainSectionStyles";

export type page = 'songs' | 'favorites' | 'playlists'


interface Props {
  songs: Song[];
}

const MainSection: React.FC<Props> = ({ songs }) => {
  const { classes } = useStyles();


  const updateCurrentPage = (newPage: page) => {
    setCurrentPage(newPage)
  }


  const [currentPage, setCurrentPage] = useState<page>('songs')
  
  return (
    <div className={classes.container}>
      <SideBar updateCurrentPageFunc={updateCurrentPage} />
      <PageContent songs={songs} />
    </div>
  );
};

export default MainSection;