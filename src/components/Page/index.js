import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import PageView from './PageView';

class Page extends PureComponent {
  render() {
    const { children, pathname } = this.props;
    return (
      <PageView
        onMenuSelect={this.handleMenuSelect}
        pathname={pathname}
      >
        {children}
      </PageView>
    );
  }

  handleMenuSelect = ({ key }) => {
    const { push } = this.props;
    push(key);
  };
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

export default Page;
