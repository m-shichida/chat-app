import React, { useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, createStyles, makeStyles } from '@material-ui/core';

import { Footer } from './components/templates/Footer';
import { Header } from './components/templates/Header';
import { Login } from './components/pages/Login';
import { MessageRoom } from './components/pages/MessageRoom';
import { Users } from './components/pages/Users';
import { UserSession } from './types/context';

export const init = { uid: '', name: '', userImage: '' }

export const UserSessionContext = createContext<UserSession>({ userSession: init, setUserSession: () => {} })

export const Router = () => {
  const classes = useStyles();
  const [userSession, setUserSession] = useState(init)

  return (
    <UserSessionContext.Provider value={{ userSession, setUserSession }}>
      { !userSession.uid ? (<Login />) : (
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
      )}
    </UserSessionContext.Provider>
  )
};

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '0',
      display: 'flex',
      flexDirection: 'column'
    }
  }),
);
