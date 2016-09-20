import React from 'react';
import { Icon } from 'react-fa';
import styles from './styles.css';

function PlayPauseButton(props) {
  const playing = props.transportState === 'PLAYING';
  const icon = <Icon size="2x" name={playing ? 'pause' : 'play'} />;
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
