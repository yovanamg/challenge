/*
 *
 * EventEdit
 *
 */

import React, { PropTypes } from 'react';
import messages from './messages';
import NumberFormat from 'react-number-format';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import {
  flatButtonStyles,
  raisedButtonStyles,
  dialogStyles,
} from './materialInlineStyles';
import {
  StyledFlatButton,
  DialogTitleContainer,
  DialogTitle,
  FormContainer,
  TitleContainer,
  FormContainerLeftSide,
  FormContainerRightSide,
  Number,
  Title,
  TwoItems,
} from './styledComponents';
import { styles } from './styles';

export class EventEdit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      open,
      theme,
      date,
      schedule,
      direction,
      handleCancel,
      handleOnChange,
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
          disabled={!theme || !date || !schedule || !direction}
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
          <DialogTitle>{messages.solicitudDialogTitle}</DialogTitle>
        </DialogTitleContainer>
        <TitleContainer>
          <Number></Number>
          <Title>{messages.firstPart}</Title>
        </TitleContainer>
        <FormContainer>{messages.theme}</FormContainer>
        <TwoItems>
          <TextField
            underlineShow={false}
            name="theme"
            style={styles.InputLeftSideSpecial}
            inputStyle={styles.textField}
            onChange={handleOnChange}
            value={theme}
          />
        </TwoItems>
        <TwoItems>
          <FormContainerLeftSide>{messages.date}</FormContainerLeftSide>
          <FormContainerRightSide>{messages.schedule}</FormContainerRightSide>
        </TwoItems>
        <TwoItems>
          <NumberFormat
            thousandSeparator
            name="date"
            format="##/##/####"
            placeholder="DD/MM/YYYY"
            mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
            style={styles.InputLeftSide}
            inputStyle={styles.textField}
            onChange={handleOnChange}
            value={date}
          />
          <TextField
            underlineShow={false}
            name="schedule"
            style={styles.InputRightSide}
            inputStyle={styles.textField}
            onChange={handleOnChange}
            value={schedule}
          />
        </TwoItems>
        <FormContainer>{messages.direction}</FormContainer>
        <TwoItems>
          <TextField
            underlineShow={false}
            name="direction"
            style={styles.InputLeftSideSpecial}
            inputStyle={styles.textField}
            onChange={handleOnChange}
            value={direction}
          />
        </TwoItems>
      </Dialog>
    );
  }
}

EventEdit.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleSave: PropTypes.func,
  theme: PropTypes.string,
  date: PropTypes.string,
  schedule: PropTypes.string,
  direction: PropTypes.string,
};

export default EventEdit;
