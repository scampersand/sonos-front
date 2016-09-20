/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import styles from './styles.css';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    transportState: React.PropTypes.string,
  };

  render() {
    return (
      <div className={styles.container}>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return state.get('global').toJS();
}

export default connect(mapStateToProps)(App);
