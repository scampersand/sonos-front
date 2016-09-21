import React from 'react';
import Icon from 'react-icons/fa/backward';
import styles from './styles.css';

function BackButton(props) {
  return (
    <div className={styles.backButton}>
      <button onClick={props.onClick}><Icon size={32}/></button>
    </div>
  );
}

BackButton.propTypes = {
  onClick: React.PropTypes.func,
};

export default BackButton;
