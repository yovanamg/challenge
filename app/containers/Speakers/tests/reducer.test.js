
import { fromJS } from 'immutable';
import speakersReducer from '../reducer';

describe('speakersReducer', () => {
  it('returns the initial state', () => {
    expect(speakersReducer(undefined, {})).toEqual(fromJS({}));
  });
});
