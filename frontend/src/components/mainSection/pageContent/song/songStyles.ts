import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  content: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "left",
    direction: "ltr",
},
}));

export default useStyles;

