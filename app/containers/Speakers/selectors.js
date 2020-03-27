import { createSelector } from 'reselect';

/**
 * Direct selector to the Speakers state domain
 */
const selectSpeakersDomain = () => (state) => state.get('Speakers');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Speakers
 */

const makeSelectSpeakers = () => createSelector(
  selectSpeakersDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSpeakers;
export {
  selectSpeakersDomain,
};
