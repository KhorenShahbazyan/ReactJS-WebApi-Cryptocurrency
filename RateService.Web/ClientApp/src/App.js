import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import RateSereviceGrid from './components/RateSereviceGrid';

export default () => (
    <Layout>
       
        <Route path='/rate/:startDateIndex?' component={RateSereviceGrid} />
    </Layout>
);
