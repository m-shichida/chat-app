import React from 'react';
import { TextField } from '@material-ui/core'

interface Props {
  data: string;
  setContent: (content: string) => void;
}

export const MessageFormInput = (props: Props) => {
  const { data, setContent } = props;

  return (
    <TextField
      fullWidth
      multiline
      variant='outlined'
      value={data}
      onChange={((e: React.ChangeEvent<HTMLInputElement>) => { setContent(e.target.value)})}
    />
  )
};
