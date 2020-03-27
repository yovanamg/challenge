/*
 *
 * UserNew
 *
 */

import React, { PropTypes } from 'react';
import Select from 'react-select';
import messages from './messages';
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
  Number,
  Title,
  TwoItems,
  FormContainerLeftSide,
  FormContainerRightSide,
  FormContainerErr,
} from './styledComponents';
import {
  styles,
  customStyles,
} from './styles';

export class UserNew extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedOptionRol: null,
    selectedOptionCity: null,
    bandera: false,
  };

  handleChange = selectedOption => {
    const  { handleOnChange } = this.props;
    let e = '';
    if (selectedOption.clave) {
      this.setState({ selectedOptionCity: selectedOption });
      e = {
        target: {
          name: 'ubication',
          value: selectedOption.id,
          object: selectedOption,
        }
      };
    } else {
      this.setState({ selectedOptionRol: selectedOption });
      e = { target: { name: 'rol', value: selectedOption.value }};
    }
    handleOnChange(e);
  };

  handlePass = () => {
    const { currentUser } = this.props;
    const { bandera } = this.state;
    currentUser.password === currentUser.confirmPassword
    ? this.setState({ bandera: false })
    : this.setState({ bandera: true });
    return bandera;
  };

  handleCancelSelected = () => {
    this.setState({
      selectedOptionRol: null,
      selectedOptionCity: null,
    });
  };

  render() {
    const {
      open,
      handleCancel,
      handleOnChange,
      handleSave,
      cities,
      currentUser,
      roles,
    } = this.props;
    const {
      bandera,
      selectedOptionRol,
      selectedOptionCity,
     } = this.state;
     
    const userActions = (
      [
        <StyledFlatButton
          label={messages.dialogButtons.noButtonLabel}
          labelStyle={flatButtonStyles.labelStyle}
          style={flatButtonStyles.style}
          onClick={() => { handleCancel(); this.handleCancelSelected(); }}
        />,
        <RaisedButton
          label={messages.dialogButtons.yesButtonLabel}
          labelStyle={raisedButtonStyles.labelStyle}
          labelColor={raisedButtonStyles.labelColor}
          backgroundColor={raisedButtonStyles.backgroundColor}
          style={raisedButtonStyles.buttonStyle}
          buttonStyle={raisedButtonStyles.buttonStyle}
          onClick={() => { handleSave(); this.handleCancelSelected(); }}
          disabled={
            !currentUser.username || bandera
            || !currentUser.password || !selectedOptionCity
              || !currentUser.confirmPassword || !selectedOptionRol
                || currentUser.password.length < 4
          }
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
          <DialogTitle>{messages.solicitudDialogTitle}</DialogTitle>
        </DialogTitleContainer>
        <TitleContainer>
          <Number>1</Number>
          <Title>{messages.firstPart}</Title>
        </TitleContainer>
        <FormContainer>{messages.username}</FormContainer>
        <TwoItems>
          <TextField
            underlineShow={false}
            name="username"
            style={styles.Input}
            inputStyle={styles.textField}
            onChange={handleOnChange}
            value={currentUser.username}
          />
        </TwoItems>
        <TwoItems>
          <FormContainerLeftSide>{messages.pass}</FormContainerLeftSide>
          <FormContainerRightSide>{messages.confirmPass}</FormContainerRightSide>
        </TwoItems>
        <TwoItems>
          <TextField
            underlineShow={false}
            name="password"
            type="password"
            style={styles.InputLeftSide}
            onChange={handleOnChange}
            inputStyle={styles.textField}
            value={currentUser.password}
          />
          <TextField
            underlineShow={false}
            name="confirmPassword"
            type="password"
            style={styles.InputRightSide}
            onChange={handleOnChange}
            onKeyUp={this.handlePass}
            inputStyle={styles.textField}
            value={currentUser.confirmPassword}
          />
        </TwoItems>
        {
          this.handlePass() ? <FormContainerErr>{messages.passErr}</FormContainerErr> : ''
        }
        <FormContainer>{messages.roles}</FormContainer>
        <Select
          value={selectedOptionRol}
          onChange={this.handleChange}
          options={roles}
          styles={customStyles}
          placeholder={'Selecciona una opción'}
        />
        <FormContainer>{messages.city}</FormContainer>
        <Select
          value={selectedOptionCity}
          onChange={this.handleChange}
          options={cities}
          styles={customStyles}
          placeholder={'Selecciona una opción'}
        />
      </Dialog>
    );
  }
}

UserNew.propTypes = {
  open: PropTypes.bool,
  currentUser: PropTypes.object,
  cities: PropTypes.array,
  handleCancel: PropTypes.func,
  handleChange: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleSave: PropTypes.func,
  roles: PropTypes.array,
};

export default UserNew;
