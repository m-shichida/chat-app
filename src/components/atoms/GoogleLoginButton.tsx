import React from 'react'
import { Container, createStyles, Theme, makeStyles } from '@material-ui/core';

import LoginImg from '../../images/google_login.png';
import { loginAsGoogleAccount } from '../../firebase/user';

export const GoogleLoginButton = () => {
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
    >
      <img
        src={LoginImg}
        alt='login img'
        onClick={() => loginAsGoogleAccount()}
      />
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0',
      marginTop: '8px'
    }
  })
);
