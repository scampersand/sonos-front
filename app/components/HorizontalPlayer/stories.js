import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import HorizontalPlayer from '.'

let props = {
  currentTrackInfo: {
    album_art: "https://placekitten.com/500/500",
  },
  transportState: "PLAYING",
}

storiesOf('HorizontalPlayer', module)
  .add('playing', () => (
      <HorizontalPlayer {...props} />
  ))
  .add('paused', () => (
      <HorizontalPlayer {...props} transportState="PAUSED_PLAYBACK" />
  ))
  .add('stopped', () => (
      <HorizontalPlayer {...props} transportState="STOPPED" />
  ))
