import expect from 'expect';
import browserPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('browserPageReducer', () => {
  it('returns the initial state', () => {
    expect(browserPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
