/*
 *
 * PlayerPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { playMusic, pauseMusic, prevSong, nextSong } from '../App/actions';
import { selectTransportState } from '../App/selectors';
import { FormattedMessage } from 'react-intl';
import PlayPauseButton from 'components/PlayPauseButton';
import BackButton from 'components/BackButton';
import NextButton from 'components/NextButton';
import messages from './messages';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';

export class PlayerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.playerPage}>
        <FormattedMessage {...messages.header} />
        <BackButton onClick={this.props.onBackClicked} />
        <PlayPauseButton transportState={this.props.transportState}
                         onPlayClicked={this.props.onPlayClicked}
                         onPauseClicked={this.props.onPauseClicked} />
        <NextButton onClick={this.props.onNextClicked} />
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
    onBackClicked: () => dispatch(prevSong()),
    onNextClicked: () => dispatch(nextSong()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);