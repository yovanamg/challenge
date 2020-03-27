
import { fromJS } from 'immutable';
import registerSpeakerReducer from '../reducer';

describe('registerSpeakerReducer', () => {
  it('returns the initial state', () => {
    expect(registerSpeakerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
