import React from 'react';
import {Icon} from 'react-fa';
import styles from './styles.css';

class PlayPauseButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let playing = this.props.transportState === "PLAYING",
        icon = <Icon size="2x" name={playing ? "pause" : "play"} />,
        onClick = playing ? this.props.onPauseClicked : this.props.onPlayClicked;
    return (
      <div className={styles.playPauseButton}>
        <button onClick={onClick}>{icon}</button>
      </div>
    );
  }
}

export default PlayPauseButton;
