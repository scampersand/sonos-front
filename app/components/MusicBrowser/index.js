import React from 'react';
import MusicMenu from 'components/MusicMenu';
import CategoryBrowser from 'components/CategoryBrowser';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

function MusicBrowser() {
  return (
    <div className={styles.musicBrowser}>
      <MusicMenu />
      <CategoryBrowser />
    </div>
  );
}

export default MusicBrowser;
