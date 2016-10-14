import React from 'react';
import { connect } from 'react-redux';
import ButtonArtists from 'components/ButtonArtists';
import { selectBrowserContent } from 'containers/BrowserPage/selectors';
import styles from './styles.css';

export class GridCategories extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    let contentItems = this.props.content.items.map(({title, path}) => (
      <ButtonArtists key={path} title={title} />
    ))
    return (
      <div className={styles.gridCategories}>
        {contentItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  content: selectBrowserContent(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(GridCategories);
