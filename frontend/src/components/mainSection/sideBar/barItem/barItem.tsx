import type React from 'react';
import useStyles from './barItemStyles';

interface Props {
    name: string,
    icon: React.ReactNode, 
}

const BarItem = ({ name, icon,  }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.barItem}>
            <div className={classes.itemIcon}>{icon}</div>
            <p className={classes.itemName}>{name}</p>
        </div>
    );
}

export default BarItem; 