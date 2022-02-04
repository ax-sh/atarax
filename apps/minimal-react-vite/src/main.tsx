import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import App from './app/App';

import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
        console.log('error boundry onReset');
      }}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root')
);
