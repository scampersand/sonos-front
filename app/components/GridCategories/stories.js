import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import GridCategories from '.';

storiesOf('GridCategories', module)
  .add('default', () => (
      <GridCategories />
  ))
