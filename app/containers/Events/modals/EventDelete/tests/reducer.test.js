
import { fromJS } from 'immutable';
import eventDeleteReducer from '../reducer';

describe('eventDeleteReducer', () => {
  it('returns the initial state', () => {
    expect(eventDeleteReducer(undefined, {})).toEqual(fromJS({}));
  });
});
