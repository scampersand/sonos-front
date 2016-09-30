import React from 'react';
import AlbumArt from 'components/AlbumArt';
import PlayControl from 'components/PlayControl';
import SongInfo from 'components/SongInfo';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export default function HorizontalPlayer(props) {
  return (
    <div className={styles.horizontalPlayer}>
      <AlbumArt small={true} />
      <SongInfo />
      <PlayControl />
    </div>
  );
}
