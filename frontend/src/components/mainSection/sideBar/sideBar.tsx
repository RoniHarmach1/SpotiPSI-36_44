import BarItem from './barItem/barItem';
import useStyles from './sideBarStyles';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { page } from '../../mainSection/mainSection';




const barItemsArr = [
    {
        id: 1,
        name: 'כל השירים',
        icon: <HomeIcon sx={{ color: 'white' }}/>,
    },
    {
        id: 2,
        name: 'פלייליסטים',
        icon: <LibraryMusicIcon sx={{ color: 'white' }}/>,
    },
    {
        id: 3,
        name: 'מועדפים',
        icon: <FavoriteIcon sx={{ color: 'white' }}/>,
    }
];

interface Props {
    updateCurrentPageFunc: (newPage: page) => void;
}




const SideBar = ({ updateCurrentPageFunc }: Props) => {
    const { classes } = useStyles();

    const clickBarItem = (id: number) => {
        if (id === 1) {
            updateCurrentPageFunc('songs');
        }
        else if (id === 2) {
            updateCurrentPageFunc('playlists');
        }
        else {
            updateCurrentPageFunc('favorites');
        }
    }

    return (
        <div className={classes.sideBar}>
            <div>
                {barItemsArr.map((item) => (
                <div key={item.id} onClick={() => clickBarItem(item.id)}>
                    <BarItem name={item.name} icon={item.icon} />
                </div>
                ))}
            </div>
        </div>
    );


}

export default SideBar;