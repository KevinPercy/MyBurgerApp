import React from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuiler from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuiler/>
      </Layout>      
    </div>
  );
}

export default App;
