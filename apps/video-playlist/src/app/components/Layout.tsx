import React from 'react';

function List({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <ul {...props}>
      {React.Children.map(children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
}

interface LayoutProps {
  role?: string;
}
function Layout({ children, ...props }: React.PropsWithChildren<LayoutProps>) {
  return (
    <div role={'layout'} {...props}>
      <header>
        <nav>
          <List className="main-nav">
            <a>Home</a>
            <a>Contact</a>
            <a>About</a>
          </List>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
export default Layout;
