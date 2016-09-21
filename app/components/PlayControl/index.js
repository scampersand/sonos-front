import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { playMusic, pauseMusic, prevSong, nextSong } from '../../containers/App/actions';
import { selectTransportState } from '../../containers/App/selectors';
import PlayPauseButton from 'components/PlayPauseButton';
import BackButton from 'components/BackButton';
import NextButton from 'components/NextButton';
import styles from './styles.css';

function PlayControl(props) {
  return (
    <div className={styles.playControl}>
      <BackButton onClick={props.onBackClicked} />
      <PlayPauseButton
        transportState={props.transportState}
        onPlayClicked={props.onPlayClicked}
        onPauseClicked={props.onPauseClicked}
      />
      <NextButton onClick={props.onNextClicked} />
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayControl);
