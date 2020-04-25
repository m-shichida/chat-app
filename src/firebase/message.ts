import { firebaseDb } from './config';
import { Message } from '../types/message';

export const postMessage = (message: Message) => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const createdAt = `${ month }月${ day }日${ hour }:${ min }`
  firebaseDb.ref('messages/').push({ ...message, createdAt });
}
