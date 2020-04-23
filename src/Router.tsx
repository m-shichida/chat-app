import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';

import { Footer } from './components/templates/Footer';
import { Header } from './components/templates/Header';
import { MessageRoom } from './components/pages/MessageRoom';
import { Users } from './components/pages/Users';

export const Router = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container maxWidth='xl' className={classes.container}>
        <Header />
        <Switch>
          <Route path='/' exact children={<MessageRoom />} />
          <Route path='/messages' children={<MessageRoom />} />
          <Route path='/users' children={<Users />} />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  )
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '0',
      display: 'flex',
      flexDirection: 'column'
    }
  }),
);
