import React from 'react';
import ButtonArtists from 'components/ButtonArtists';
import styles from './styles.css';

function GridCategories() {
  return (
    <div className={styles.gridCategories}>
      <ButtonArtists />
    </div>
  );
}

export default GridCategories;
