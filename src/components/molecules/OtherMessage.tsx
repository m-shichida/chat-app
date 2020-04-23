import React from 'react';
import { Grid } from '@material-ui/core';

import { UserIcon } from '../atoms/UserIcon';
import { MessageContent } from '../atoms/MessageContent';
import { Message } from '../../types/message';

interface Props {
  messages: Message[];
}

export const OtherMessage = () => {
  return (
    <Grid container>
      <UserIcon />
      <MessageContent />
    </Grid>
  )
};
