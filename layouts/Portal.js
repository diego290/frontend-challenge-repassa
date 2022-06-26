import React from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footer/Footer.js";

import routes from "routes.js";

import styles from "assets/jss/nextjs-material-dashboard-pro/layouts/authStyle.js";

export default function Pages(props) {
  const { children, ...rest } = props;
  const router = useRouter();
  const wrapper = React.createRef();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    return function cleanup() { };
  });
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/portal") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "Repassa";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  return (
    <div>
      <AuthNavbar brandText={getActiveRoute(routes)} {...rest} />
      <div className={classes.wrapper} ref={wrapper}>
        <div
          className={classes.fullPage}
        >
          {children}
          <Footer black />
        </div>
      </div>
    </div>
  );
}
