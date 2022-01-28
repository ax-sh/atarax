import React from 'react';

function List({
  children,
  ...props
}: React.PropsWithChildren<{ children: any[] }>) {
  return (
    <ul {...props}>
      {children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
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
          <List>
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
