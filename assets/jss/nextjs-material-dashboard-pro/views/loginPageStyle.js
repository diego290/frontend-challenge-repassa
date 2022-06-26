import {
  container,
  cardTitle,
  whiteColor,
  grayColor,
  primaryColor,
  dangerColor,
} from "assets/jss/nextjs-material-dashboard-pro.js";

const loginPageStyle = (theme) => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
  },
  cardTitle: {
    ...cardTitle,
    color: whiteColor,
  },
  textCenter: {
    textAlign: "center",
  },
  justifyContentCenter: {
    justifyContent: "center !important",
  },
  customButtonClass: {
    "&,&:focus,&:hover": {
      color: whiteColor,
    },
    marginLeft: "5px",
    marginRight: "5px",
  },
  inputAdornment: {
    marginRight: "18px",
  },
  inputAdornmentIcon: {
    color: grayColor[6],
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  cardHeader: {
    marginBottom: "20px",
  },
  socialLine: {
    padding: "0.9375rem 0",
  },

  esqueciSenha: {
    fontSize: "13px",
    color: "#a9a9a9",
    "&:hover": {
      color: primaryColor[0],
    },
  },

  customError: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    padding: "10px",
    marginLeft: "15px",
    marginRight: "15px",
    textAlign: "center",
  }
});

export default loginPageStyle;
