
import { fromJS } from 'immutable';
import userDeleteReducer from '../reducer';

describe('userDeleteReducer', () => {
  it('returns the initial state', () => {
    expect(userDeleteReducer(undefined, {})).toEqual(fromJS({}));
  });
});
