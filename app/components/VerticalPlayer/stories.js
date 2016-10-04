import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import VerticalPlayer from '.'

let props = {
  currentTrackInfo: {
    album_art: "https://placekitten.com/500/500",
  },
  transportState: "PLAYING",
}

storiesOf('VerticalPlayer', module)
  .add('playing', () => (
      <VerticalPlayer {...props} />
  ))
  .add('paused', () => (
      <VerticalPlayer {...props} transportState="PAUSED_PLAYBACK" />
  ))
  .add('stopped', () => (
      <VerticalPlayer {...props} transportState="STOPPED" />
  ))
