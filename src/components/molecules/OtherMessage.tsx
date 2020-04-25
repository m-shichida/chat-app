import React from 'react';
import { Grid } from '@material-ui/core';

import { UserIcon } from '../atoms/UserIcon';
import { MessageContent } from '../atoms/MessageContent';
import { Message } from '../../types/message';

interface Props {
  message: Message;
}

export const OtherMessage = (props: Props) => {
  const { message } = props;

  return (
    <Grid container>
      <UserIcon userImage={message.userImage} />
      <MessageContent content={message.content} />
    </Grid>
  )
};
