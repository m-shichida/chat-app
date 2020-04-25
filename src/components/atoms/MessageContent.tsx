import React from 'react';
import { Grid, Paper, createStyles, makeStyles } from '@material-ui/core';

interface Props {
  content: string;
}

export const MessageContent = (props: Props) => {
  const { content } = props;
  const classes = useStyles();

  return (
    <Grid item>
      <Paper className={classes.paper}>
        { content }
      </Paper>
    </Grid>
  )
};

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      padding: '0 8px',
      margin: '16px 0'
    }
  })
);
