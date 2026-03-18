import useStyles from "./sideBarStyles";

const Sidebar: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.sidebar}>
    </div>
  );
};

export default Sidebar;