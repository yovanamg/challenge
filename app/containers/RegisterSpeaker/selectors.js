import { createSelector } from 'reselect';

/**
 * Direct selector to the registerSpeaker state domain
 */
const selectRegisterSpeakerDomain = () => (state) => state.get('registerSpeaker');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RegisterSpeaker
 */

const makeSelectRegisterSpeaker = () => createSelector(
  selectRegisterSpeakerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRegisterSpeaker;
export {
  selectRegisterSpeakerDomain,
};
