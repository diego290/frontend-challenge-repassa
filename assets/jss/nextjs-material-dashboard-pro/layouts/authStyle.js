import {
  whiteColor,
  blackColor,
  hexToRgb,
} from "assets/jss/nextjs-material-dashboard-pro.js";

const pagesStyle = (theme) => ({
  wrapper: {
    height: "auto",
    minHeight: "100vh",
    position: "relative",
    top: "0",
  },
  fullPage: {
    padding: "110px 0",
    position: "relative",
    minHeight: "100vh",
    display: "flex!important",
    margin: "0",
    border: "0",
    color: whiteColor,
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      minHeight: "700px!important",
      padding: "103px 0",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
      border: "none !important",
    },
    "&:before": {
      // backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.65)",
      backgroundColor: "#DCDCDC",
    },
    "&:before,&:after": {
      display: "block",
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      zIndex: "2",
    },
  },

  '@global': {
    '*::-webkit-scrollbar': {
      width: '9px',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      borderRadius: "15px",
      outline: '1px solid slategrey',
    }
  }
});

export default pagesStyle;
