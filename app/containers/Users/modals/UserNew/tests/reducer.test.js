
import { fromJS } from 'immutable';
import userNewReducer from '../reducer';

describe('userNewReducer', () => {
  it('returns the initial state', () => {
    expect(userNewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
