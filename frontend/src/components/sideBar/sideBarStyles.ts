import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    sideBar: {
        display: 'flex',
        flexDirection: 'column',
        width: '15%',
        height: '100%',
        backgroundColor: 'black',
        borderLeft: '4px solid #1E1E1E'
    }
}));

export default useStyles;