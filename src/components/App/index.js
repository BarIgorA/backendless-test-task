/**
 * App module
 * Just declare UI and obtain initial data
 */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { func } from 'prop-types';

// Custom
import Layout from '../Layout';
import Header from '../Header';
import Tabs from '../tabs';
import Main from '../Main';
import Footer from '../Footer';
import request from '../../utils/request';


const App = ({ routes }) => {
  const [tabs, setTabs] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const {result} = await request('tabs.json');
      if (result) setTabs(result);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Header />
      <Router>
        <Tabs tabs={tabs} />
        <Main>
          {routes(tabs)}
        </Main>
      </Router>
      <Footer />
    </Layout>
  );
}

App.propTypes = {
  routes: func.isRequired,
};

export default App;
