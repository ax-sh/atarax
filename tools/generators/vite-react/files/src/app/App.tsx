import React from 'react';
import Layout from './components/Layout';

function App() {
  React.useEffect(() => {
    fetch('/user')
      .then((x) => x.json())
      .then(console.log);
  }, []);
  return (
    <Layout>
      <header>App</header>
    </Layout>
  );
}

export default App;
