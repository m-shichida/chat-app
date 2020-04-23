import React from 'react';
import styled from 'styled-components';

import { UserIcon } from '../atoms/UserIcon';

export const Users = () => {
  return (
    <SCContainer>
      <UserIcon />
      <span>〇〇</span>
    </SCContainer>
  )
};

const SCContainer = styled.div`
  min-height: calc(100vh - 112px);
  display: flex;
  flex-direction: column;
`
