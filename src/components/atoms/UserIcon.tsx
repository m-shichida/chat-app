import React from 'react';
import { Grid, Avatar, createStyles, Theme, makeStyles } from '@material-ui/core';

export const UserIcon = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Avatar />
    </Grid>
  )
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '8px'
    }
  })
);
