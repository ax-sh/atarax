import React from 'react';

export function List({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
	return (
		<ul {...props}>
			{React.Children.map(children, (child, index) => {
				return <li key={index}>{child}</li>;
			})}
		</ul>
	);
}

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
	status?: 'loading' | 'error' | 'success';
}
// React.PropsWithChildren<LayoutProps>
function Layout({ children, className, ...props }: LayoutProps) {
	return (
		<div className={`Layout ${className}`} {...props}>
			<header>
				<nav>
					<List className="main-nav flex justify-around w-40">
						<b>Home</b>
						<b>Contact</b>
						<b>About</b>
					</List>
				</nav>
			</header>
			<main>{children}</main>
			<footer></footer>
		</div>
	);
}
export default Layout;
