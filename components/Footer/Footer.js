/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "assets/jss/nextjs-material-dashboard-pro/components/footerStyle.js";

export default function Footer(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { fluid, white, rtlActive, black } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
    [classes.blackColor]: black,
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white,
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
    [classes.blackColor]: black,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <p className={classes.center}>
          &copy; {1900 + new Date().getYear()}{" "}| Todos os direitos reservados!
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  black: PropTypes.bool,
  rtlActive: PropTypes.bool,
};
