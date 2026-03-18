import { tss } from "tss-react/mui";

export default tss.create(() => ({
  app: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    height: "100vh",
    width: '100vw',
    backgroundColor: "#121212",
    color: "white",
  },
}));