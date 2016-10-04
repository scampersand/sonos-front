import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import ButtonArtists from '.';

storiesOf('ButtonArtists', module)
  .add('default', () => (
      <ButtonArtists />
  ))
