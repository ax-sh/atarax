import React from 'react';
import './App.scss';

const List = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ul className={`list ${className}`} {...props}>
      {React.Children.map(children, (child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
};
const Nav = () => {
  const [items] = React.useState([1, 2, 3, 4, 5, 6]);
  return (
    <nav>
      <List>
        {items.map((item, index) => (
          <b key={index}>{item}</b>
        ))}
      </List>
    </nav>
  );
};
function Layout({ children, className, ...props }: React.AllHTMLAttributes<HTMLElement>) {
  return (
    <section className={`Layout ${className} `} {...props}>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </section>
  );
}

export function App() {
  return <Layout>hello</Layout>;
}

export default App;
