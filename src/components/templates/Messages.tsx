import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import { firebaseDb } from '../../firebase/config';
import { Message } from '../../types/message';
import { OtherMessage } from '../../components/molecules/OtherMessage'
import { MyMessage } from '../../components/molecules/MyMessage'
import { UserSessionContext } from '../../Router';

export const Messages = () => {
  const { userSession } = useContext(UserSessionContext);
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    firebaseDb.ref('/messages').on('child_added', (data) => {
      setMessages(prevState => [...prevState, data.val()]);
    });
  }, []);

  return (
    <SCContainer>
      {
        messages.length ? (
          messages.map((message, k) => message.uid === userSession.uid ? <MyMessage key={k} message={message} /> : <OtherMessage key={k} message={message} />)
        ) : (
          <></>
        )
      }
    </SCContainer>
  )
};

const SCContainer = styled.div`
  min-height: calc(100vh - 168px);
  display: flex;
  flex-direction: column;
`
