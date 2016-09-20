import React from 'react';
import Icon from 'react-icons/fa/forward';
import styles from './styles.css';

function NextButton(props) {
  return (
    <div className={styles.nextButton}>
      <button onClick={props.onClick}><Icon /></button>
    </div>
  );
}

NextButton.propTypes = {
  onClick: React.PropTypes.func,
};

export default NextButton;
