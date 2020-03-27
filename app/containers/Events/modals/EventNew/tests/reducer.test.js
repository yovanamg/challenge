
import { fromJS } from 'immutable';
import eventNewReducer from '../reducer';

describe('eventNewReducer', () => {
  it('returns the initial state', () => {
    expect(eventNewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
