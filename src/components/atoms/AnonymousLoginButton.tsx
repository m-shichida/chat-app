import React from 'react'
import { Button, Container } from '@material-ui/core';

import { loginAsAnonymousUser } from '../../firebase/user';

export const AnonymousLoginButton = () => {
  return (
    <Container>
      <Button
        color='primary'
        variant='contained'
        onClick={() => loginAsAnonymousUser()}
      >
        匿名ログイン
      </Button>
    </Container>
  );
};
