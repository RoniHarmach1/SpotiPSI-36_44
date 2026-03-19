import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(() => ({
    app: {
         display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        height: '100vh',
        width: '100vw',
        direction: 'rtl',
        backgroundColor: "black",
        color: "white",
        boxSizing: "border-box",      

    }
}));

export default useStyles;
