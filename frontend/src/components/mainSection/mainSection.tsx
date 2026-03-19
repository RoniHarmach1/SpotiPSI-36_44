import type { Song, page } from "../types/types";
import PageContent from "./pageContent/pageContent";
import SideBar from "./sideBar/sideBar"
import React from "react";
import { useState } from "react";
import useStyles from "./mainSectionStyles";

interface Props {
  songs: Song[],
  favoriteSongsId: number[],
  currentPage: page,
  setCorrentPageFunc: (prevPge: page) => void,
}


const MainSection: React.FC<Props> = ({ songs, favoriteSongsId, currentPage, setCorrentPageFunc }: Props) => {
  const { classes } = useStyles();


  const updateCurrentPage = (newPage: page) => {
    setCorrentPageFunc(newPage);
  }

  return (
    <div className={classes.container}>
      <SideBar updateCurrentPageFunc={updateCurrentPage} currentPage={currentPage}/>
      <PageContent songs ={songs} currentPage={currentPage} favoriteSongsId={favoriteSongsId}/>
    </div>
  );
};

export default MainSection;