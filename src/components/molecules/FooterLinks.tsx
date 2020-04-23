import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Forum, PeopleAltRounded, ExitToApp } from '@material-ui/icons';

export const FooterLinks = () => {
  const [current, setCurrent] = useState('messages')
  const handleChange = (_e: React.ChangeEvent<{}>, newCurrent: string) => {
    setCurrent(newCurrent)
  }

  return (
    <BottomNavigation value={current} onChange={handleChange}>
      <BottomNavigationAction component={Link} to='/users' label='Users' value='users' icon={<PeopleAltRounded />} />
      <BottomNavigationAction component={Link} to='/messages' label='Messages' value='messages' icon={<Forum />} />
      <BottomNavigationAction label='Logout' value='logout' icon={<ExitToApp />}/>
    </BottomNavigation>
  )
};
