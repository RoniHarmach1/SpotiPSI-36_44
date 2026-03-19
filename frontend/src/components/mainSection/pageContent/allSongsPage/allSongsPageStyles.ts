import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    direction: "ltr",
},
}));

export default useStyles;

