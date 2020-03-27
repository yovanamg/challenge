
import { fromJS } from 'immutable';
import eventEditReducer from '../reducer';

describe('eventEditReducer', () => {
  it('returns the initial state', () => {
    expect(eventEditReducer(undefined, {})).toEqual(fromJS({}));
  });
});
