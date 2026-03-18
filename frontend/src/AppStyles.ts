import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(() => ({
    app: {
         display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        height: '100vh',
        width: '100vw',
        direction: 'rtl',
        backgroundColor: "#121212",
        color: "white",
    }
}));

export default useStyles;
