import { Component, ErrorInfo, ReactNode } from 'react';

import { Placeholder } from '../Placeholder';

const ERROR_TITLE = 'Some error occur!';
const ERROR_DESCRIPTION = 'Try to reload the page';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  private reloadPage() {
    globalThis.location.reload();
  }

  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    console.log('Error boundary error', error);

    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Placeholder
          title={ERROR_TITLE}
          description={ERROR_DESCRIPTION}
          Actions={<button onClick={this.reloadPage}>Reload page</button>}
        />
      );
    }

    return this.props.children;
  }
}
