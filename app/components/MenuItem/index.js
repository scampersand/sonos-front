import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

function MenuItem(props) {
  return (
    <div className={styles.menuItem}>
      <span>{props.title}</span>
    </div>
  );
}

export default MenuItem;
