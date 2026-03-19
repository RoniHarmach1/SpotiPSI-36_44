import type { Song } from "../../../types/types";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useStyles from "../pageContentStyles";
import SongComponent from "../song/song";

const AllSongsPage: React.FC<{songs: Song []}> = ({ songs}) => {
    const { classes } = useStyles();
    return (
        <div className={classes.content}>
        {songs.map((song) => (
            <div key={song.id}>
                <SongComponent song={song}/>
            </div>
        ))}
        </div>
    );
};

export default AllSongsPage;