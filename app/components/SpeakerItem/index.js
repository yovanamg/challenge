/**
*
* SpeakerItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
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
class SpeakerItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      speaker,
      detailsSpeaker,
    } = this.props;
    return (
      <TableRow style={styles.RowHeight}>
        <TableRowColumn style={styles.styleId}>
          {speaker.id}
        </TableRowColumn>
        <TableRowColumn style={styles.styleName}>
          {speaker.name}
        </TableRowColumn>
        <TableRowColumn style={styles.styleEmail}>
          {speaker.email}
        </TableRowColumn>
        <TableRowColumn style={styles.styleTitle}>
          {speaker.title}
        </TableRowColumn>
        <TableRowColumn style={styles.styleAbstract}>
          {speaker.abstract}
        </TableRowColumn>
        <TableRowColumn style={styles.styleBiography}>
          {speaker.biography}
        </TableRowColumn>
        {
          <TableRowColumn style={styles.ButtonCellStyle}>
            <IconMenu
              style={IconMenuStyles}
              iconButtonElement={<IconButton style={IconButtonStyles}><MoreHorIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <MenuItem
                primaryText={messages.buttons.details}
                onClick={detailsSpeaker}
              />
            </IconMenu>
          </TableRowColumn>
        }
      </TableRow>
    );
  }
}

SpeakerItem.propTypes = {
  speaker: PropTypes.object,
  detailsSpeaker: PropTypes.func,
};

export default SpeakerItem;
