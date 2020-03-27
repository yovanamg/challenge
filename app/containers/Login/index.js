/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FullPageLoader from 'components/FullPageLoader';
import SessionForm from 'components/SessionForm';
import Snackbar from 'material-ui/Snackbar';
import { TextField } from 'material-ui';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import makeSelectLogin from './selectors';
import * as Actions from './actions';
import styles from './styles';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    emailFocused: false,
    passwordFocused: false,
    usernameFocused: false,
    confirmPasswordFocused: false,
  }

  handleOnPressButton = () => {
    const { loginAction } = this.props;
    const { errorTextPass, email, password } = this.props.login;
    if (!errorTextPass) {
      loginAction(email, password);
    }
  }

  handleRegister = () => {
    const { registerAction } = this.props;
    const { errorTextPass, email, password } = this.props.login;
    if (!errorTextPass) {
      registerAction(email, password);
    }
  }

  handleRequestCloseSnackBar = () => {
    const { setSnackbarState } = this.props;
    setSnackbarState(false, '');
  }

  handleChange = (e) => {
    const { saveData } = this.props;
    const name = e.target.name;
    const value = e.target.value;
    saveData(name, value);
  };

  render() {
    const {
      errorTextCorreo,
      errorTextPass,
      snackbar,
      loading,
      email,
      password,
      confirmPassword,
    } = this.props.login;

    const contenido = (
      <div>
        <div>
          <TextField
            floatingLabelText="Correo Electrónico"
            floatingLabelStyle={
              this.state.emailFocused ?
              styles.textfield.correo.labelStyleFocused :
              styles.textfield.correo.labelStyle
            }
            name="email"
            style={this.state.emailFocused
              ? styles.textfield.correoFocused
              : styles.textfield.correo
            }
            errorText={errorTextCorreo}
            onChange={this.handleChange}
            errorStyle={styles.textfield.correo.errorStyle}
            inputStyle={styles.textfield.correo.inputStyle}
            underlineShow={false}
            onFocus={() => this.setState({ emailFocused: true })}
            onBlur={() => this.setState({ emailFocused: false })}
          />
        </div>
        <TextField
          floatingLabelText="Ingresa tu contraseña"
          floatingLabelStyle={this.state.passwordFocused
            ? styles.textfield.password.labelStyleFocused
            : styles.textfield.password.label
          }
          type="password"
          name="password"
          fullWidth
          onChange={this.handleChange}
          style={styles.textfield.password}
          errorText={errorTextPass}
          errorStyle={styles.textfield.password.errorStyle}
          underlineShow={false}
          maxLength={30}
          inputStyle={this.state.passwordFocused
            ? styles.textfield.password.inputStyleFocused
            : styles.textfield.password.inputStyle
          }
          onFocus={() => this.setState({ passwordFocused: true })}
          onBlur={() => this.setState({ passwordFocused: false })}
        />
        <Snackbar
          open={snackbar.open}
          message={snackbar.text}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestCloseSnackBar}
        />
        {loading && <FullPageLoader />}
      </div>
    );

    const contenido2 = (
      <div>
        <div>
          <TextField
            floatingLabelText="Correo Electrónico"
            floatingLabelStyle={
              this.state.emailFocused ?
              styles.textfield.correo.labelStyleFocused :
              styles.textfield.correo.labelStyle
            }
            name="email"
            style={this.state.emailFocused
              ? styles.textfield.correoFocused
              : styles.textfield.correo
            }
            errorText={errorTextCorreo}
            onChange={this.handleChange}
            errorStyle={styles.textfield.correo.errorStyle}
            inputStyle={styles.textfield.correo.inputStyle}
            underlineShow={false}
            onFocus={() => this.setState({ emailFocused: true })}
            onBlur={() => this.setState({ emailFocused: false })}
          />
        </div>
        <TextField
          floatingLabelText="Ingresa tu contraseña"
          floatingLabelStyle={this.state.passwordFocused
            ? styles.textfield.password.labelStyleFocused
            : styles.textfield.password.label
          }
          type="password"
          name="password"
          fullWidth
          onChange={this.handleChange}
          style={styles.textfield.password}
          errorText={errorTextPass}
          errorStyle={styles.textfield.password.errorStyle}
          underlineShow={false}
          maxLength={30}
          inputStyle={this.state.passwordFocused
            ? styles.textfield.password.inputStyleFocused
            : styles.textfield.password.inputStyle
          }
          onFocus={() => this.setState({ passwordFocused: true })}
          onBlur={() => this.setState({ passwordFocused: false })}
        />
        <TextField
          floatingLabelText="Confirma tu contraseña"
          floatingLabelStyle={this.state.confirmPasswordFocused
            ? styles.textfield.confirmPassword.labelStyleFocused
            : styles.textfield.confirmPassword.label
          }
          type="password"
          name="confirmPassword"
          fullWidth
          onChange={this.handleChange}
          style={styles.textfield.confirmPassword}
          errorText={errorTextPass}
          errorStyle={styles.textfield.confirmPassword.errorStyle}
          underlineShow={false}
          maxLength={30}
          inputStyle={this.state.confirmPasswordFocused
            ? styles.textfield.confirmPassword.inputStyleFocused
            : styles.textfield.confirmPassword.inputStyle
          }
          onFocus={() => this.setState({ confirmPasswordFocused: true })}
          onBlur={() => this.setState({ confirmPasswordFocused: false })}
        />
        <Snackbar
          open={snackbar.open}
          message={snackbar.text}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestCloseSnackBar}
        />
        {loading && <FullPageLoader />}
      </div>
    );

    return (
      <SessionForm
        titulo="Inicia sesión"
        description="MEETUPS"
        description2="Registro"
        contenido={contenido}
        contenido2={contenido2}
        labelButton="Ingresar"
        labelButton2="Registrame"
        onPressButton={this.handleOnPressButton}
        onRegisterBtn={this.handleRegister}
        buttonDisabled={!email || !password}
        buttonDisabled2={!email || !password
          || !confirmPassword
            || !(password === confirmPassword)
        }
        register="¿No tienes una cuenta? "
      />
    );
  }
}

Login.propTypes = {
  login: PropTypes.object.isRequired,
  errorTextPass: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  loginAction: PropTypes.func,
  setSnackbarState: PropTypes.func,
  saveData: PropTypes.func,
  registerAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(Actions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
