import React from 'react';
import styled from 'styled-components';

import { OtherMessage } from '../molecules/OtherMessage';
import { MyMessage } from '../molecules/MyMessage';
import { Message } from '../../types/message';

interface Props {
  messages: Message[];
}

export const Messages = (props: Props) => {
  const { messages } = props;

  return (
    <SCContainer>
      <OtherMessage />
      <MyMessage />
    </SCContainer>
  )
};

const SCContainer = styled.div`
  min-height: calc(100vh - 168px);
  display: flex;
  flex-direction: column;
`
