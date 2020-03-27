/**
*
* UserItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreHorIcon from 'material-ui/svg-icons/navigation/more-horiz';
import Moment from 'moment/min/moment-with-locales';
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

class UserItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
  }
  render() {
    const {
      user,
      editUser,
      deleteUser,
    } = this.props;
    return (
      <TableRow style={styles.RowHeight}>
        <TableRowColumn style={styles.styleId}>
          {user.id}
        </TableRowColumn>
        <TableRowColumn style={styles.styleUsername}>
          {user.username}
        </TableRowColumn>
        <TableRowColumn style={styles.styleRol}>
          {user.rol}
        </TableRowColumn>
        <TableRowColumn style={styles.styleUbicacion}>
          {user.clave.concat(' ').concat(user.municipio)}
        </TableRowColumn>
        <TableRowColumn style={styles.styleDate}>
          {Moment(user.fecha_creacion).utc().format('DD/MM/YYYY')}
        </TableRowColumn>
        <TableRowColumn style={styles.ButtonCellStyle}>
          {
            (<IconMenu
              style={IconMenuStyles}
              iconButtonElement={<IconButton style={IconButtonStyles}><MoreHorIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <MenuItem
                primaryText={messages.buttons.edit}
                onClick={editUser}
              />
              <MenuItem
                primaryText={messages.buttons.delete}
                onClick={deleteUser}
              />
            </IconMenu>)
          }
        </TableRowColumn>
      </TableRow>
    );
  }
}

UserItem.propTypes = {
  user: PropTypes.object,
  editUser: PropTypes.func,
  deleteUser: PropTypes.func,
};

export default UserItem;
