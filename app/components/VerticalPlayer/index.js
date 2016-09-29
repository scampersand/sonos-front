import React from 'react';
import PlayControl from 'components/PlayControl';
import SongInfo from 'components/SongInfo';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

function VerticalPlayer(props) {
  return (
    <div className={styles.verticalPlayer}>
      <SongInfo />
      <PlayControl />
    </div>
  );
}

export default VerticalPlayer;
