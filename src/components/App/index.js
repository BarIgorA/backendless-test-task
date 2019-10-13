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
  const [firstRender, setFirstRender] = useState(true);
  const [tabs, setTabs] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const { result, error } = await request('tabs.json');
      if (error) return;
      if (result && typeof result !== 'string') {
        setTabs(
          result
            .sort(
              (a, b) => (
                Number.isSafeInteger(a.order) && Number.isSafeInteger(b.order)
                  ? a.order - b.order
                  : 0
              ),
            ),
        );
      }
      setFirstRender(false);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Header />
        <Main>
          <Router>
            <Tabs tabs={tabs} />
            {firstRender || routes(tabs)}
          </Router>
        </Main>
      <Footer />
    </Layout>
  );
}

App.propTypes = {
  routes: func.isRequired,
};

export default App;
