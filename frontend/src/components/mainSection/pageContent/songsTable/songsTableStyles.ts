import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  allSongsPageContent: {
    display: "flex",
    width: '95%',
    height:'90%',
    flexDirection: "column",
    textAlign: "left",
    direction: "rtl",
  },

  songSeperator: {
    backgroundColor: 'gray',
    height: '1px',
    border: 0
  }

}));

export default useStyles;

