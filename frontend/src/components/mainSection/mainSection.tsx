import Sidebar from "./sideBar/sideBar";
import PageContent from "./pageContent/pageContent";
import useStyles from "./mainSectionStyles";

const MainSection: React.FC = () => {
    const { classes } = useStyles();

  return (
    <div className={classes.container}>
        <PageContent />
        <Sidebar />

    </div>
  );
};

export default MainSection;