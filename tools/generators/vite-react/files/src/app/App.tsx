import React from 'react';
import { getUserInfo } from './apis';
import Layout from './components/Layout';

function App() {
  React.useEffect(() => {
    getUserInfo().then(console.log);
  }, []);
  return (
    <Layout>
      <header>App</header>
    </Layout>
  );
}

export default App;
