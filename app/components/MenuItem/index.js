import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

function MenuItem(props) {
  return (
    <div className={styles.menuItem}>
      <button onClick={props.onClick}>{props.title}</button>
    </div>
  );
}

MenuItem.propTypes = {
  onClick: React.PropTypes.func,
};

export default MenuItem;
