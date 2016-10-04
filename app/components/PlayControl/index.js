import React from 'react'
import PlayPauseButton from 'components/PlayPauseButton';
import BackButton from 'components/BackButton';
import NextButton from 'components/NextButton';
import styles from './styles.css';

export default function PlayControl(props) {
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
