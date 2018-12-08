import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './styles.module.css';

const { Header, Content, Footer } = Layout;

class PageRouteView extends PureComponent {
  render() {
    const { children, onMenuSelect, pathname } = this.props;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            defaultSelectedKeys={[pathname]}
            id={styles.rootHeaderMenu}
            mode="horizontal"
            onSelect={onMenuSelect}
            theme="dark"
          >
            <Menu.Item key="/">Home</Menu.Item>
            <Menu.Item key="/charta/">ChartA</Menu.Item>
            <Menu.Item key="/chartb/">ChartB</Menu.Item>
            <Menu.Item key="/lorem/">Lorem</Menu.Item>
          </Menu>
        </Header>
        <Content id={styles.rootContent}>
          <div id={styles.rootContentBody}>
            {children}
          </div>
        </Content>
        <Footer id={styles.rootFooter}>
          Footer
        </Footer>
      </Layout>
    );
  }
}

PageRouteView.propTypes = {
  children: PropTypes.node.isRequired,
  onMenuSelect: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default PageRouteView;
