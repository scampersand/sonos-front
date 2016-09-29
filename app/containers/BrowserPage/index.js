/*
 *
 * BrowserPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectBrowserPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export default class BrowserPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.browserPage}>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

//const mapStateToProps = selectBrowserPage();
//
//function mapDispatchToProps(dispatch) {
//  return {
//    dispatch,
//  };
//}
//
//export default connect(mapStateToProps, mapDispatchToProps)(BrowserPage);
