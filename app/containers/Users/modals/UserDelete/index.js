/*
 *
 * UserDelete
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

export class UserDelete extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      open,
      currentUser,
      handleCancel,
      handleSave,
    } = this.props;

    const userActions = (
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
        actions={userActions}
        open={open}
        autoScrollBodyContent
        contentStyle={dialogStyles.smallContentStyle}
      >
        <DialogTitleContainer>
          <DialogTitleDelete>{messages.solicitudDialogTitle}</DialogTitleDelete>
        </DialogTitleContainer>
        <FormContainerDelete>
          ¿{messages.textDelete} <b>{currentUser.username}</b> {messages.textDelete2} <b>{currentUser.id}</b>?
        </FormContainerDelete>
      </Dialog>
    );
  }
}

UserDelete.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleSave: PropTypes.func,
  currentUser: PropTypes.object,
};

export default UserDelete;
