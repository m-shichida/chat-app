import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { UserIcon } from '../atoms/UserIcon';
import { MessageContent } from '../atoms/MessageContent';

export const MyMessage = () => {
  return (
    <SCContainer>
      <MessageContent />
      <UserIcon />
    </SCContainer>
  )
};

const SCContainer = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`
