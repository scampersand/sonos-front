import expect from 'expect';
import playerPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('playerPageReducer', () => {
  it('returns the initial state', () => {
    expect(playerPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
