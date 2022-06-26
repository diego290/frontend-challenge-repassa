import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import logo from "../../assets/img/graodireto-logo.png";

import styles from "../../assets/jss/nextjs-material-dashboard-pro/components/authNavbarStyle.js";

export default function AuthNavbar(props) {
  const router = useRouter();
  const activeRoute = (routeName) => {
    return router.route.indexOf(routeName) > -1 ? true : false;
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { color, brandText } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color,
  });
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Link href="/admin">
              <a>
                <img src={logo} style={{ maxWidth: '200px', }} />
              </a>
            </Link>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Link href="/admin">
              <a>
                <img src={logo} style={{ maxWidth: '180px', }} />
              </a>
            </Link>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
