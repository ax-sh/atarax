import React from 'react';
import './app.scss';

const Layout = ({ children }: React.ComponentProps<any>) => {
  return (
    <div>
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
export function App({ title }: { title: string }) {
  return <Layout>hello</Layout>;
}

export default App;
