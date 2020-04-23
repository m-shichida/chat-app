import React from 'react';
import { Button } from '@material-ui/core'
import { Send } from '@material-ui/icons'

interface Props {
  content: string;
  onClickToPost: (content: string) => void;
}

export const SubmitButton = (props: Props) => {
  const { content, onClickToPost } = props;

  return (
    <Button
      color="primary"
      variant="contained"
      disabled={!content.length}
      onClick={() => onClickToPost(content)}
    >
      <Send />
    </Button>
  )
};
