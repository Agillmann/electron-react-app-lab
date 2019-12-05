import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

const App = ({ location }) => {
  return (
    <Layout>
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
          <section className="route-section">
            <Switch location={location}>
              <Route path="/" exact component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

App.propTypes = {
  location: PropTypes.string.isRequired,
};
export default withRouter(App);
