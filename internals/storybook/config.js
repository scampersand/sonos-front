import { configure } from '@kadira/storybook'

import 'sanitize.css/sanitize.css';

const req = require.context('../../app', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
