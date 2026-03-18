import useStyles from "./playerStyles";

const Player: React.FC = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.player} >
            <p>אין שירים</p>
        </div>
    );
};

    export default Player;