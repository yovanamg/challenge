/*
 *
 * UserEdit
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
  FormContainerErr,
  FormContainerLeftSide,
  FormContainerRightSide,
  ContainerBtn,
} from './styledComponents';
import {
  styles,
  customStyles,
} from './styles';

export class UserEdit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedOptionRol: null,
    selectedOptionCity: null,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedOptionRol: nextProps.currentUser.rol,
      selectedOptionCity: nextProps.currentUser.clave.concat(' ').concat(nextProps.currentUser.municipio),
    });
  }

  handleChange = selectedOption => {
    const  { handleOnChange } = this.props;
    let e = '';
    if (selectedOption.clave) {
      this.setState({ selectedOptionCity: selectedOption.label });
      e = { target: { name: 'ubication', value: selectedOption.id, object: selectedOption }};
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

  render() {
    const {
      open,
      handleCancel,
      handleOnChange,
      handleSave,
      cities,
      currentUser,
      roles,
      handleCheckPass,
      validation,
    } = this.props;
    const {
      selectedOptionRol,
      selectedOptionCity,
    } = this.state;

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
          disabled={!currentUser.username
            || !selectedOptionCity || !selectedOptionRol
              || (currentUser.password !== currentUser.confirmPassword)
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
        <FormContainer>{messages.roles}</FormContainer>
        <Select
          value={roles.filter(option => option.label === selectedOptionRol)}
          onChange={this.handleChange}
          options={roles}
          styles={customStyles}
          placeholder={selectedOptionRol}
        />
        <FormContainer>{messages.city}</FormContainer>
        <Select
          value={cities.filter(option => option.label === selectedOptionCity)}
          onChange={this.handleChange}
          options={cities}
          styles={customStyles}
          placeholder={selectedOptionCity}
        />
        <TitleContainer>
          <Number>2</Number>
          <Title>{messages.changePass}</Title>
        </TitleContainer>
        <TwoItems>
          <FormContainerLeftSide>{messages.lastPass}</FormContainerLeftSide>
        </TwoItems>
        <TwoItems>
          <TextField
            underlineShow={false}
            name="lastPass"
            type="password"
            style={styles.InputLeftSide}
            onChange={handleOnChange}
            inputStyle={styles.textField}
            value={currentUser.lastPass}
          />
          <ContainerBtn>
            <RaisedButton
              label={messages.dialogButtons.check}
              labelStyle={raisedButtonStyles.labelStyle}
              labelColor={raisedButtonStyles.labelColor}
              backgroundColor={raisedButtonStyles.backgroundColor}
              style={raisedButtonStyles.buttonStyle}
              buttonStyle={raisedButtonStyles.buttonStyle}
              onClick={handleCheckPass}
              disabled={!currentUser.lastPass}
            />
          </ContainerBtn>
        </TwoItems>
        {
          validation ?
            <div>
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
            </div> : ''
        }
        {
          this.handlePass() ? <FormContainerErr>{messages.passErr}</FormContainerErr> : ''
        }
      </Dialog>
    );
  }
}

UserEdit.propTypes = {
  open: PropTypes.bool,
  currentUser: PropTypes.object,
  cities: PropTypes.array,
  handleCancel: PropTypes.func,
  handleOnChange: PropTypes.func,
  handleSave: PropTypes.func,
  roles: PropTypes.array,
  handleCheckPass: PropTypes.func,
  validation: PropTypes.bool,
};

export default UserEdit;
