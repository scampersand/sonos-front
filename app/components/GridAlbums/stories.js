import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import GridAlbums from '.';

let props = {
  albumInfo: {
    album_art: "https://placekitten.com/500/500",
    album: 'Best of Cats',
    artist: 'Various',
  },
}

storiesOf('GridAlbums', module)
  .add('default', () => (
      <GridAlbums {...props} />
  ))
