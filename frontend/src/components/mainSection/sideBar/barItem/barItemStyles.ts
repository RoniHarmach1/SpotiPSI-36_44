import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(() => ({
    barItem: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        color: 'white',
        ":hover": {
            backgroundColor: '#301934'
        }
    },
    
    itemIcon: {
        marginRight: '10%'
    },

    itemName: {
        marginRight: '10%'
    }
}));

export default useStyles;