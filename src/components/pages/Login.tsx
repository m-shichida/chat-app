import React from 'react';
import styled from 'styled-components';
import { Paper, createStyles, Theme, makeStyles } from '@material-ui/core';

import { AnonymousLoginButton } from '../atoms/AnonymousLoginButton';
import { GoogleLoginButton } from '../atoms/GoogleLoginButton';

export const Login = () => {
  const classes = useStyles();

  return (
    <SCContainer>
      <Paper elevation={3} className={classes.root}>
        <AnonymousLoginButton />
        <GoogleLoginButton />
      </Paper>
    </SCContainer>
  )
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '200px',
      margin: '0 auto',
      marginTop: '200px',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  })
);

const SCContainer = styled.div`
  min-height: calc(100vh - 112px);
  display: flex;
  flex-direction: column;
`
