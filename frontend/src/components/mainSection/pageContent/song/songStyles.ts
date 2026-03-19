import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  songContent: {
    display: "flex",
    direction: 'ltr',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '2rem'
  },

  playAndNameContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  plusAndFavoriteContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  songName: {
    marginLeft: '10px'
  },

  plusIcon: {
    marginRight: '10px'
  }
}));

export default useStyles;

