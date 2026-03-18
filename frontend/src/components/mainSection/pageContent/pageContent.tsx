import useStyles from "./pageContentStyles";

const PageContent: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.content}>

    </div>
  );
};

export default PageContent;