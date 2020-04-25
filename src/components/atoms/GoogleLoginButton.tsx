import React, { useContext } from 'react'
import firebase from 'firebase';
import { Container, createStyles, makeStyles } from '@material-ui/core';

import LoginImg from '../../images/google_login.png';
import { firebaseApp } from '../../firebase/config';
import { UserSessionContext } from '../../Router';

export const GoogleLoginButton = () => {
  const { setUserSession } = useContext(UserSessionContext);
  const classes = useStyles();
  const onClickLoginButton = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then((result) => {
      const user = result.user;
      if(user) {
        const uid = user.uid
        const name = user.displayName;
        const image = user.photoURL
        setUserSession({ uid, name, image });
      } else {
        alert('エラー')
      }
    })
  }

  return (
    <Container
      className={classes.root}
    >
      <img
        src={LoginImg}
        alt='login img'
        onClick={() => onClickLoginButton()}
      />
    </Container>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '0',
      marginTop: '8px'
    }
  })
);
