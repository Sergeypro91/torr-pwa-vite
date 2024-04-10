import React from 'react';

import { ReloadPrompt } from '@torr/shared';

import { WeeklyTrends } from '../../modules/pictures';

import './Home.css';

export const Home = () => {
  return (
    <div style={{ height: '2000px' }}>
      <WeeklyTrends />
      <ReloadPrompt />
    </div>
  );
};
