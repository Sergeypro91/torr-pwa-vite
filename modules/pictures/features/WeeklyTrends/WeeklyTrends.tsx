import { PictureSlider } from '../PictureSlider';

import { useLogic } from './useLogic';

export const WeeklyTrends = () => {
  const { weeklyTrends } = useLogic();

  return <PictureSlider pictures={weeklyTrends} />;
};
