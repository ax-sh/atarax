import React from 'react';
import { getUserInfo } from './apis';
import Layout from './components/Layout';
import { useQuery } from 'react-query';
function App() {
  const { data, isLoading } = useQuery('userInfo', getUserInfo);

  if (isLoading) return <h1>Loading</h1>;
  console.log('user info', data);

  return (
    <Layout>
      <header>App</header>
    </Layout>
  );
}

export default App;
