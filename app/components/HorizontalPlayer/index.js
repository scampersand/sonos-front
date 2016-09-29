import React from 'react';
import AlbumArt from 'components/AlbumArt';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export default function HorizontalPlayer(props) {
  return (
    <div className={styles.horizontalPlayer}>
      <AlbumArt small={true} />
    </div>
  );
}
