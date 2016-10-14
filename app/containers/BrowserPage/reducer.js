import { fromJS } from 'immutable'
import {
  DEFAULT_ACTION,
  BROWSER_CONTENT_FETCH_SUCCEEDED,
  BROWSER_CONTENT_FETCH_FAILED,
  BROWSER_MENU_FETCH_SUCCEEDED,
  BROWSER_MENU_FETCH_FAILED,
} from './constants'

const initialState = fromJS({
  menu: {
    title: '',
    items: [],
  },
})

function browserPageReducer(state = initialState, action) {
  switch (action.type) {
    case BROWSER_MENU_FETCH_SUCCEEDED:
      return state.merge({
        menu: action.data,
      })
    case BROWSER_CONTENT_FETCH_SUCCEEDED:
      return state.merge({
        content: action.data,
      })
    case DEFAULT_ACTION:
      return state
    default:
      return state
  }
}

export default browserPageReducer
