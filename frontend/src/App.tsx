import { useState } from "react";
import useStyles from "./AppStyles"
import SideBar from "./components/sideBar/sideBar";

export type page = 'songs' | 'favorites' | 'playlists'

function App() {
  const { classes } = useStyles();
  const [currentPage, setCurrentPage] = useState<page>('songs')


  const updateCurrentPage = (newPage: page) => {
    setCurrentPage(newPage)
  }


  return (
    <div className={classes.app}>
      <SideBar updateCurrentPageFunc={updateCurrentPage}></SideBar>
    </div>
  )
}
 
export default App;

