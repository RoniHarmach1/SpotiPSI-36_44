import type { Song } from "../../../types/types";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useStyles from "./songsTableStyles";
import SongComponent from "../song/song";



const SongsTable: React.FC<{songs: Song []}> = ({ songs }) => {
    const { classes } = useStyles();
    
    return (
        <div className={classes.allSongsPageContent}>
        {songs.map((song) => (
            <div key={song.id}>
                <SongComponent song={song}/>
                <hr className={classes.songSeperator}></hr>
            </div>
        ))}
        </div>
    );
};

export default SongsTable;