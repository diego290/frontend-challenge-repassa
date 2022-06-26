import {
  primaryColor,
  container,
  defaultFont,
  cardTitle,
  roseColor,
  whiteColor,
  grayColor,
  hexToRgb,
  successColor,
  tooltip,
} from "../../nextjs-material-dashboard-pro.js";

import hoverCardStyle from "../hoverCardStyle.js";

const charactersPageStyle = (theme) => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
  },
  title: {
    ...defaultFont,
    color: "#1C1C1C",
    marginTop: "5vh",
    marginBottom: "30px",
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "600",
  },
  description: {
    fontSize: "18px",
    color: "#1C1C1C",
    marginLeft: "30px",
    marginRight: "30px",
    textAlign: "left",
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important",
  },
  cardCategoryWhite: {
    color: whiteColor,
    marginTop: "10px",
  },
  icon: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid " + grayColor[11],
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px",
    },
  },
  iconWhite: {
    color: whiteColor,
  },
  iconRose: {
    color: roseColor[0],
  },
  marginTop30: {
    marginTop: "30px",
  },
  fullSlide: {
    width: "100vw",
  },

  ...hoverCardStyle,
  tooltip,
  cardTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  cardCharacterTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
    textAlign: "center",
  },
  cardCategory: {
    color: grayColor[0],
    fontSize: "14px",
    paddingTop: "10px",
    marginBottom: "0",
    marginTop: "0",
    margin: "0",
  },
  cardCharacterDescription: {
    textAlign: "center",
    color: grayColor[0],
  },
  stats: {
    color: grayColor[0],
    fontSize: "12px",
    lineHeight: "22px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "4px",
      width: "16px",
      height: "16px",
      marginRight: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "4px",
      fontSize: "16px",
      marginRight: "3px",
    },
  },
  CharacterStats: {
    paddingTop: "7px",
    paddingBottom: "7px",
    margin: "0",
  },
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: 14,
    height: 14,
  },
  underChartIcons: {
    width: "17px",
    height: "17px",
  },
  data: {
    color: "inherit",
    textAlign: "center",
    "& h4": {
      marginBottom: "0px",
      marginTop: "0px",
    },
  },
  iconHover: {
    color: primaryColor[2],
    "&:hover": {
      color: primaryColor[0],
    },
  },
  spaces: {
    minHeight: "100px",
  },
  backgroundGrid: {
    backgroundColor: "#fafafa",
  },
});

export default charactersPageStyle;
