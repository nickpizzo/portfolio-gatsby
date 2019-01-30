import React from 'react';
import Layout from '../components/Layout';
import About from '../sections/About';
import Landing from '../sections/Landing';
import Projects from '../sections/Projects';
// import Writing from '../sections/Writing';

const IndexPage = () => (
  <Layout>
    <Landing />
    <Projects />
    <About />

    {/* <Writing /> */}
  </Layout>
);

export default IndexPage;
