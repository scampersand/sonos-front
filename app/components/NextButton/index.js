import React from 'react';
import Icon from 'react-icons/fa/forward';
import styles from './styles.css';

function NextButton(props) {
  return (
    <div className={styles.nextButton}>
      <button onClick={props.onClick}><Icon size={32}/></button>
    </div>
  );
}

NextButton.propTypes = {
  onClick: React.PropTypes.func,
};

export default NextButton;
