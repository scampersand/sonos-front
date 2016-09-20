import React from 'react';
import PlayIcon from 'react-icons/fa/play';
import PauseIcon from 'react-icons/fa/pause';
import styles from './styles.css';

function PlayPauseButton(props) {
  const playing = props.transportState === 'PLAYING';
  const icon = playing ? <PauseIcon /> : <PlayIcon />;
  const onClick = playing ? props.onPauseClicked : props.onPlayClicked;
  return (
    <div className={styles.playPauseButton}>
      <button onClick={onClick}>{icon}</button>
    </div>
  );
}

PlayPauseButton.propTypes = {
  onPauseClicked: React.PropTypes.func,
  onPlayClicked: React.PropTypes.func,
  transportState: React.PropTypes.string,
};

export default PlayPauseButton;
