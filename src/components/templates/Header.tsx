import React from 'react';
import { AppBar, Typography, createStyles, makeStyles, Theme } from '@material-ui/core';

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='sticky' className={classes.title}>
      <Typography variant="h5">
        Chat App
      </Typography>
    </AppBar>
  )
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      padding: '8px',
    }
  }),
);
