<<<<<<< HEAD
import { tss } from "tss-react/mui";

export default tss.create(() => ({
  app: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    height: "100vh",
    width: '100vw',
    backgroundColor: "#121212",
    color: "white",
  },
}));
=======
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(() => ({
    app: {
        height: '100vh',
        width: '100vw',
        direction: 'rtl'
    }
}));

export default useStyles;
>>>>>>> 87318d8 (Added SideBar Part1 Q3)
