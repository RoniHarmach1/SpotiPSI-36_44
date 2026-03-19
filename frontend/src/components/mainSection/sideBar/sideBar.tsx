import BarItem from './barItem/barItem';
import useStyles from './sideBarStyles';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { page } from '../../mainSection/mainSection';
import type { ReactNode } from 'react';

interface barItem {
    id: number;
    name: string;
    englishName: page;
    icon: ReactNode;
}

const barItemsArr: barItem[] = [
    {
        id: 1,
        name: 'כל השירים',
        englishName: 'songs',
        icon: <HomeIcon sx={{ color: 'white' }}/>,
    },
    {
        id: 2,
        name: 'פלייליסטים',
        englishName: 'playlists',
        icon: <LibraryMusicIcon sx={{ color: 'white' }}/>,
    },
    {
        id: 3,
        name: 'מועדפים',
        englishName: 'favorites',
        icon: <FavoriteIcon sx={{ color: 'white' }}/>,
    }
];


interface Props {
    updateCurrentPageFunc: (newPage: page) => void,
    currentPage: page,
}


const SideBar = ({ updateCurrentPageFunc , currentPage }: Props) => {
    const { classes } = useStyles();

    
    const clickBarItem = (id: number) => {
        barItemsArr.map((barItem) => {
            if (barItem.id === id) {
                updateCurrentPageFunc(barItem.englishName)
            }   
        })
    }
    
    
    return (
        <div className={classes.sideBar}>
            {barItemsArr.map((item) => (
            <div key={item.id} onClick={() => clickBarItem(item.id)}>
                <BarItem name={item.name} icon={item.icon}/>
            </div>
            ))}
        </div>
    );
}

export default SideBar;