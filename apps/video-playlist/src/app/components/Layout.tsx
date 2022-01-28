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
    <div {...props}>
      <header>
        <nav className="flex justify-end p-4 py-8">
          <List className="main-nav flex  w-40 justify-between children:cursor-pointer">
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
