import React, { useState } from 'react';
import styled from 'styled-components';

import { SubmitButton } from '../atoms/SubmitButton';
import { MessageFormInput } from '../atoms/MessageFormInput';
import { postMessage } from '../../firebase/message';

export const MessageForm = () => {
  const [content, setContent] = useState('')
  const onClickToPost = (message: string) => {
    postMessage(message);
    setContent('');
  }

  return (
    <SCFormContainer>
      <MessageFormInput data={content} setContent={setContent} />
      <SubmitButton onClickToPost={onClickToPost} content={content}/>
    </SCFormContainer>
  )
};

const SCFormContainer = styled.div`
  display: flex;
`
