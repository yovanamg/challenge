import { createSelector } from 'reselect';

/**
 * Direct selector to the events state domain
 */
const selectEventsDomain = () => (state) => state.get('events');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Events
 */

const makeSelectEvents = () => createSelector(
  selectEventsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEvents;
export {
  selectEventsDomain,
};
