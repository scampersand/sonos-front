import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { playMusic, pauseMusic, prevSong, nextSong } from '../App/actions';
import { selectTransportState } from '../App/selectors';
import { pageLoaded } from '../App/actions';
import VerticalPlayer from 'components/VerticalPlayer';
import messages from './messages';
import styles from './styles.css';

export class PlayerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    onBackClicked: React.PropTypes.func,
    onPlayClicked: React.PropTypes.func,
    onPauseClicked: React.PropTypes.func,
    onNextClicked: React.PropTypes.func,
    transportState: React.PropTypes.string,
    dispatch: React.PropTypes.func,  // from connect()
  };

  render() {
    return (
      <div className={styles.playerPage}>
        <VerticalPlayer {...this.props} />
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
