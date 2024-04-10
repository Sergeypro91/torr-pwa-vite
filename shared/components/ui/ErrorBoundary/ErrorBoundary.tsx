import React from 'react';
import { ErrorComponentProps } from '@tanstack/react-router';

export const ErrorBoundary = (props: ErrorComponentProps) => {
  const { error } = props;

  React.useEffect(() => {
    console.log('CATCH ERROR', { error });
  }, [error]);

  return <h3>ERROR BOUNDARY</h3>;
};
