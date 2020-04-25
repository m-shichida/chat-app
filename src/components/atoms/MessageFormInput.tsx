import React from 'react';
import { TextField } from '@material-ui/core'

interface Props {
  content: string;
  setContent: (content: string) => void;
}

export const MessageFormInput = (props: Props) => {
  const { content, setContent } = props;

  return (
    <TextField
      fullWidth
      multiline
      variant='outlined'
      value={content}
      onChange={((e: React.ChangeEvent<HTMLInputElement>) => { setContent(e.target.value)})}
    />
  )
};
