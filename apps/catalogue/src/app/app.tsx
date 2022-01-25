import { Cart } from '@atarax/cart';
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
  return (
    <Layout>
      <Cart />
    </Layout>
  );
}

export default App;
