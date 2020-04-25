import { Dispatch, SetStateAction } from 'react';

interface UserInfo {
  uid: string;
  name: string;
  userImage?: string;
}

export interface UserSession {
  userSession: UserInfo;
  setUserSession: Dispatch<SetStateAction<any>>;
}
