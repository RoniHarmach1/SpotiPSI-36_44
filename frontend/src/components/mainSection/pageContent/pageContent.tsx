import type { Song } from "../../types/types";
import useStyles from './pageContentStyles';
import AllSongsPage from "./allSongsPage/allSongsPage";

interface Props {
  songs: Song[];
}

const PageContent: React.FC<Props> = ({ songs }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.content}>
      <AllSongsPage songs={songs} />
    </div>
  );
};

export default PageContent;

