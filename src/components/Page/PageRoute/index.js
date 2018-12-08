import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import PageRouteView from './PageRouteView';

class PageRoute extends PureComponent {
  render() {
    const { children, location: { pathname } }  = this.props;
    return (
      <PageRouteView
        onMenuSelect={this.handleMenuSelect}
        pathname={pathname}
      >
        {children}
      </PageRouteView>
    );
  }

  handleMenuSelect = ({ key }) => {
    const { history: { push } } = this.props;
    push(key);
  };
}

PageRoute.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageRoute;
