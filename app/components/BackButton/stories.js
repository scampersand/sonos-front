import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import BackButton from '.';

storiesOf('BackButton', module)
  .add('default', () => (
      <BackButton onClick={action('clicked')} />
  ))
