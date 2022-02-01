import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export function List({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
	return (
		<ul {...props}>
			{React.Children.map(children, (child, index) => {
				return <li key={index}>{child}</li>;
			})}
		</ul>
	);
}

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

function Bomb() {
	throw new Error('💥 CABOOM 💥');
}

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
	status?: 'loading' | 'error' | 'success';
}
// React.PropsWithChildren<LayoutProps>
function Layout({ children, className, ...props }: LayoutProps) {
	const handleErrorReset = () => {
		console.log('Resetting error boundary');
	};
	return (
		<div className={`Layout ${className}`} {...props}>
			<header>
				<nav>
					<List className="main-nav flex justify-around w-60 bg-blue-500">
						<b>Home</b>
						<b>Contact</b>
						<b>About</b>
					</List>
				</nav>
			</header>
			<main>
				<ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleErrorReset}>
					{children}
				</ErrorBoundary>
			</main>
			<footer></footer>
		</div>
	);
}
export default Layout;
