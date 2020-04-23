import { firebaseDb } from './config';
import { Message } from '../types/message';

export const postMessage = (message: string) => {
  firebaseDb.ref('messages/').push(message);
}
