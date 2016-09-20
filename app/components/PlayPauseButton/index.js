/**
*
* PlayPauseButton
*
*/

import React from 'react';

import styles from './styles.css';

class PlayPauseButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let buttonText = (this.props.transportState === "PLAYING" ? "||" : ">");
    let onClick = (this.props.transportState === "PLAYING" ?
                   this.props.onPauseClicked : this.props.onPlayClicked);
    return (
      <div className={styles.playPauseButton}>
        <button onClick={onClick}>{buttonText}</button>
      </div>
    );
  }
}

export default PlayPauseButton;
