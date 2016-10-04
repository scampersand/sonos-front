import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

function MenuItem() {
  return (
    <div className={styles.menuItem}>
      <span>Music Library</span>
    </div>
  );
}

export default MenuItem;
