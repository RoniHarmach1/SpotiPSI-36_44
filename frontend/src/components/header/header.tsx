import useStyles from "./headerStyles";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import React from "react";


const Header: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.header}>
            SpotiPSI
            <AudiotrackIcon/>
        </div>
    );
};

export default Header;


