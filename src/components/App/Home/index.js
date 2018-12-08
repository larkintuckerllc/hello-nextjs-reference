import { PropTypes } from 'prop-types';
import React from 'react';
import Page from '../../Page';

const Home = ({ history: { push }, location: { pathname }}) => (
  <Page
    pathname={pathname}
    push={push}
  >
    Home
  </Page>
);

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;