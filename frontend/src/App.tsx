import Header from "./components/header/header";
import Player from "./components/player/player";
import MainSection from "./components/mainSection/mainSection";
import useStyles from "./AppStyles";

const App: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <MainSection />
      <Player />
    </div>
  );
}

export default App;