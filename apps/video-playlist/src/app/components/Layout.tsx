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
        <nav className="flex justify-end p-4 py-8">
          <List className="main-nav flex  w-40 justify-between children:cursor-pointer">
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
