import React from 'react';
import GridCategories from 'components/GridCategories';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

function CategoryBrowser() {
  return (
    <div className={styles.categoryBrowser}>
      <GridCategories />
    </div>
  );
}

export default CategoryBrowser;
