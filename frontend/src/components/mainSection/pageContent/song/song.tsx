import type { Song } from "../../../types/types";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./songStyles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const SongComponent: React.FC<{song: Song}> = ({ song }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.songContent}>
            <div className={classes.playAndNameContainer}>
                <PlayArrowIcon style={{ color: "#a138cb" }}/>
                <span className={classes.songName}>{song.name} - {song.artist}</span>
            </div>
            <div className={classes.plusAndFavoriteContainer}>
                <AddIcon className={classes.plusIcon}/>
                <FavoriteBorderIcon/>
            </div>
        </div>
    );
};

export default SongComponent;