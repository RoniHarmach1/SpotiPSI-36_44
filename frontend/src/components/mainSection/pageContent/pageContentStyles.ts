import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(() => ({
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "85%",
    height: "100%",
    backgroundColor: "black",
    boxSizing: "border-box", 
    overflowY: 'auto',
  },

  pageTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },

  pageTitle: {
    marginRight: '2%',   
    fontSize: '34px',
  }
}));


export default useStyles;

