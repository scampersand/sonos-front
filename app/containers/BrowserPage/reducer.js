import { fromJS } from 'immutable'
import {
  DEFAULT_ACTION,
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
    case DEFAULT_ACTION:
      return state
    default:
      return state
  }
}

export default browserPageReducer
