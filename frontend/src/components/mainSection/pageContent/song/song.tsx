import type { Song } from "../../../types/types";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "../pageContentStyles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Add } from "@mui/icons-material";

const SongComponent: React.FC<{song: Song}> = ({ song }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.content}>
            <div>
                <PlayArrowIcon style={{ color: "#a138cb" }}/>
                <span>{song.name} - {song.artist}</span>
            </div>
            <div>
                <FavoriteBorderIcon/>
                <AddIcon/>
            </div>

        </div>
    );
};

export default SongComponent;