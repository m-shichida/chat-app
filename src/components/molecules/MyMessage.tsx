import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { UserIcon } from '../atoms/UserIcon';
import { MessageContent } from '../atoms/MessageContent';
import { Message } from '../../types/message';

interface Props {
  message: Message;
}

export const MyMessage = (props: Props) => {
  const { message } = props;

  return (
    <SCContainer>
      <MessageContent content={message.content} />
      <UserIcon userImage={message.userImage} />
    </SCContainer>
  )
};

const SCContainer = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`
