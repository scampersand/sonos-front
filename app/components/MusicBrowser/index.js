import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

function MusicBrowser() {
  return (
    <div className={styles.musicBrowser}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default MusicBrowser;
