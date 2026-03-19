import type { Song } from "../../types/types";
import useStyles from './pageContentStyles';
import AllSongsPage from "./songsTable/songsTable";
import type {page} from "../../types/types"

interface Props {
  songs: Song[];
  favoriteSongsId: number[];
  currentPage: page;
}


const PageContent: React.FC<Props> = ({  songs, favoriteSongsId, currentPage }: Props) => {
  const { classes } = useStyles();
  
  const returnCurrentPageHebrew = () => {
    if (currentPage === "songs") {
      return "כל השירים";
    }
    else if (currentPage === "playlists") {
      return "פלייליסט";
    }
    else {
      return "המועדפים שלי";
    }
  }

  return (
    <div className={classes.pageContent}>
      <div className={classes.pageTitleContainer}>
        <p className={classes.pageTitle}>
          {returnCurrentPageHebrew()}
        </p>
      </div>
      
      <AllSongsPage songs={songs} />

    </div>
  );
};

export default PageContent;

