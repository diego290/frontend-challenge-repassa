import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    margin: "0 -15px",
    width: "calc(100% + 30px)",
    // '&:before,&:after':{
    //   display: 'table',
    //   content: '" "',
    // },
    // '&:after':{
    //   clear: 'both',
    // }
  },
};

export default function GridContainer(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { children, className, justify, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className} justify>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  justify: PropTypes.string,
};
