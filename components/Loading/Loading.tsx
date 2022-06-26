import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const Loading = (props: Props) => {
  const { promiseInProgress = false } = props;
  const classes = useStyles()();
  const { backdrop, circularProgress } = classes;
  return (
    <Backdrop className={backdrop} open={promiseInProgress}>
      <CircularProgress className={circularProgress} />
    </Backdrop>
  );
};

interface Props {
  promiseInProgress: boolean;
}

const useStyles = () =>
  makeStyles(() => {
    return {
      backdrop: {
        zIndex: 1400,
        color: '#ffffff',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },
      circularProgress: {
        color: '#ffffff',
      },
    };
  });

export default Loading;
