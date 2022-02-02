import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:windi.css';
import 'virtual:windi-devtools';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './app/App';

// if (process.env.NODE_ENV === 'development') {
// 	console.log('Development mode');

// 	import('./mocks/browser').then(({ worker }) => worker.start());
// 	document.title = 'DEVELOPMENT';
// }
// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</StrictMode>,
	document.getElementById('root')
);
