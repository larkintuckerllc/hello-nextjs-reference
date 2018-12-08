
import { PropTypes } from 'prop-types';
import React from 'react';
import Page from '../../Page';

const ChartBLoad = ({ history: { push }, location: { pathname }}) => (
  <Page
    pathname={pathname}
    push={push}
  >
    ChartB
  </Page>
);

ChartBLoad.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChartBLoad;