import React, { useState, useEffect } from 'react';

import { firebaseDb } from '../../firebase/config';
import { MessageForm } from '../molecules/MessageForm';
import { Messages } from '../templates/Messages';

export const MessageRoom = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    firebaseDb.ref('messages/').on('child_added', (snapshot) => {
      setMessages(snapshot.val());
    });
  }, []);

  return (
    <>
      <Messages messages={messages}/>
      <MessageForm />
    </>
  )
};
