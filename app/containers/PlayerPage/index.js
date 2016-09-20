/*
 *
 * PlayerPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { playMusic, pauseMusic } from '../App/actions';
import { selectTransportState } from '../App/selectors';
import { FormattedMessage } from 'react-intl';
import PlayPauseButton from 'components/PlayPauseButton';
import messages from './messages';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';

export class PlayerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.playerPage}>
        <FormattedMessage {...messages.header} />
        <PlayPauseButton transportState={this.props.transportState}
                         onPlayClicked={this.props.onPlayClicked}
                         onPauseClicked={this.props.onPauseClicked} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  transportState: selectTransportState(),
});

function mapDispatchToProps(dispatch) {
  return {
    onPlayClicked: () => dispatch(playMusic()),
    onPauseClicked: () => dispatch(pauseMusic()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);