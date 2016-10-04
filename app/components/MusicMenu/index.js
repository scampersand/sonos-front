import React from 'react';
import MenuItem from 'components/MenuItem';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

function MusicMenu() {
  return (
    <div className={styles.musicMenu}>
      <MenuItem />      
    </div>
  );
}

export default MusicMenu;
