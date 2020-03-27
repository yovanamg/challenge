/**
*
* EventItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Toggle from 'material-ui/Toggle';
import MoreHorIcon from 'material-ui/svg-icons/navigation/more-horiz';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { styles } from './styles';
import {
  IconButtonStyles,
  IconMenuStyles,
} from './materialInlineStyles';
import messages from './messages';
const user = JSON.parse(localStorage.getItem('user'));
class EventItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      event,
      editEvent,
      deleteEvent,
      handleAttendance,
    } = this.props;
    return (
      <TableRow style={styles.RowHeight}>
        <TableRowColumn style={styles.styleId}>
          {event.id}
        </TableRowColumn>
        <TableRowColumn style={styles.styleTheme}>
          {event.theme}
        </TableRowColumn>
        <TableRowColumn style={styles.styleDate}>
          {event.date}
        </TableRowColumn>
        <TableRowColumn style={styles.styleSchedule}>
          {event.schedule}
        </TableRowColumn>
        <TableRowColumn style={styles.styleDirection}>
          {event.direction}
        </TableRowColumn>
        <TableRowColumn style={styles.styleAttendance}>
          { user.rol !== 'Admin' ?
            <Toggle
              onToggle={handleAttendance}
              thumbSwitchedStyle={styles.switch}
              trackSwitchedStyle={styles.trackSwitched}
              toggled={event.attendance}
            /> : ''
          }
        </TableRowColumn>
        {
          <TableRowColumn style={styles.ButtonCellStyle}>
            { user.rol == 'Admin' ?
              (<IconMenu
                style={IconMenuStyles}
                iconButtonElement={<IconButton style={IconButtonStyles}><MoreHorIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              >
                <MenuItem
                  primaryText={messages.buttons.edit}
                  onClick={editEvent}
                />
                <MenuItem
                  primaryText={messages.buttons.delete}
                  onClick={deleteEvent}
                />
              </IconMenu>) : ''
            }
          </TableRowColumn>
        }
      </TableRow>
    );
  }
}

EventItem.propTypes = {
  event: PropTypes.object,
  editEvent: PropTypes.func,
  deleteEvent: PropTypes.func,
  handleAttendance: PropTypes.func,
};

export default EventItem;
