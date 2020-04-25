import React from 'react';
import { Grid, Avatar, createStyles, makeStyles } from '@material-ui/core';

interface Props {
  userImage?: string;
}

export const UserIcon = (props: Props) => {
  const classes = useStyles();
  const { userImage } = props;

  return (
    <Grid item className={classes.root}>
      <Avatar src={userImage} />
    </Grid>
  )
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '8px'
    }
  })
);
