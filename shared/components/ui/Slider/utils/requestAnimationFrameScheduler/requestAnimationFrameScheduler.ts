import { RAF_SCHEDULER_DURATION } from '../../constants.ts';

export const requestAnimationFrameScheduler =
  (job: (progress: number) => void) =>
  (duration = RAF_SCHEDULER_DURATION) =>
  (afterJob?: () => void) => {
    let startTime: number;

    const animation =
      (job: (progress: number) => void) => (timestamp: number) => {
        startTime = startTime ?? timestamp;

        const elapsed = timestamp - startTime;
        const progress = duration ? Math.min(elapsed / duration, 1) : 1;

        job(progress);

        if (progress < 1) {
          window.requestAnimationFrame(animation(job));
        }

        if (progress >= 1 && afterJob) {
          afterJob();
        }
      };

    window.requestAnimationFrame(animation(job));
  };
