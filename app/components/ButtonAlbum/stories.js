import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import ButtonAlbum from '.';

let props = {
  albumInfo: {
    album_art: "https://placekitten.com/500/500",
    album: 'Best of Cats',
    artist: 'Various',
  },
}

storiesOf('ButtonAlbum', module)
  .add('default', () => (
      <ButtonAlbum {...props} />
  ))
