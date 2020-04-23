import React from 'react';
import { Grid, Paper, createStyles, Theme, makeStyles } from '@material-ui/core';

interface Props {
  content: string;
}

export const MessageContent = () => {
  // const { content } = props;
  const classes = useStyles();

  return (
    <Grid item>
      <Paper className={classes.paper}>
        aaaaa
      </Paper>
    </Grid>
  )
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: '0 8px',
      margin: '16px 0'
    }
  })
);
