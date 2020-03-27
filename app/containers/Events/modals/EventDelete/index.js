/*
 *
 * EventDelete
 *
 */

import React, { PropTypes } from 'react';
import messages from './messages';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {
  flatButtonStyles,
  raisedButtonStyles,
  dialogStyles,
} from './materialInlineStyles';
import {
  StyledFlatButton,
  DialogTitleContainer,
  DialogTitleDelete,
  FormContainerDelete,
} from './styledComponents';

export class EventDelete extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      open,
      theme,
      id,
      handleCancel,
      handleSave,
    } = this.props;

    const eventActions = (
      [
        <StyledFlatButton
          label={messages.dialogButtons.noButtonLabel}
          labelStyle={flatButtonStyles.labelStyle}
          style={flatButtonStyles.style}
          onClick={handleCancel}
        />,
        <RaisedButton
          label={messages.dialogButtons.yesButtonLabel}
          labelStyle={raisedButtonStyles.labelStyle}
          labelColor={raisedButtonStyles.labelColor}
          backgroundColor={raisedButtonStyles.backgroundColor}
          style={raisedButtonStyles.buttonStyle}
          buttonStyle={raisedButtonStyles.buttonStyle}
          onClick={handleSave}
        />,
      ]
    );

    return (
      <Dialog
        modal
        actions={eventActions}
        open={open}
        autoScrollBodyContent
        contentStyle={dialogStyles.smallContentStyle}
      >
        <DialogTitleContainer>
          <DialogTitleDelete>{messages.solicitudDialogTitle}</DialogTitleDelete>
        </DialogTitleContainer>
        <FormContainerDelete>
          ¿{messages.textDelete} <b>{theme}</b> {messages.textDelete2} <b>{id}</b>?
        </FormContainerDelete>
      </Dialog>
    );
  }
}

EventDelete.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleSave: PropTypes.func,
  theme: PropTypes.string,
  id: PropTypes.number,
};

export default EventDelete;
