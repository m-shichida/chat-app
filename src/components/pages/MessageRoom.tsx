import React from 'react';

import { MessageForm } from '../molecules/MessageForm';
import { Messages } from '../templates/Messages';

export const MessageRoom = () => {
  return (
    <>
      <Messages />
      <MessageForm />
    </>
  )
};
