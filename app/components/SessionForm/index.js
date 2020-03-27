/**
*
* SessionForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
import { isEmpty } from 'lodash';
import { browserHistory } from 'react-router';
import Description from './Description';
import {
  Container,
  Form,
  Titulo,
  Logo,
  Content,
  DivButton,
  ImgLogo,
  ContentRegister,
  Register,
  StyledFlatButton,
} from './styledComponents';
import {
  flatButtonStyles,
  raisedButtonStyles,
} from './materialInlineStyles';


class SessionForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    option: false,
  }

  handleRegistrer = () => {
    const { option } = this.state;
    this.setState({ option: !option });
  }

  render() {
    const {
      titulo,
      contenido,
      contenido2,
      labelButton,
      labelButton2,
      description,
      description2,
      buttonDisabled,
      buttonDisabled2,
      register,
      onPressButton,
      onRegisterBtn,
    } = this.props;
    const desc = !isEmpty(description) && <Description description={description} />;
    const desc2 = !isEmpty(description2) && <Description description={description2} />;
    const { option } = this.state;
    return (
      !option ?
        <Container>
          <Form>
            <Logo >
            </Logo>
            {desc}
            <Titulo className={'title'}>{titulo}</Titulo>
            <Content>
              {contenido}
            </Content>
            <DivButton>
              <RaisedButton
                label={labelButton}
                labelStyle={raisedButtonStyles.labelStyle}
                labelColor={raisedButtonStyles.labelColor}
                backgroundColor={raisedButtonStyles.backgroundColor}
                style={raisedButtonStyles.buttonStyle}
                buttonStyle={raisedButtonStyles.buttonStyle}
                onClick={onPressButton}
                disabled={buttonDisabled}
              />
            </DivButton>
            <ContentRegister>
              <Register>{register}</Register>
              <StyledFlatButton
                label={'Regístrate'}
                labelStyle={flatButtonStyles.labelStyle}
                style={flatButtonStyles.style}
                onClick={this.handleRegistrer}
              />
            </ContentRegister>
            <StyledFlatButton
              label={'Quiero dar una charla... Ingresa aquí'}
              labelStyle={flatButtonStyles.labelStyleSpecial}
              style={flatButtonStyles.styleSpecial}
              onClick={() => browserHistory.push('/register-speaker')}
            />
          </Form>
        </Container>
      : (<Container>
        <Form>
          <Logo >
          </Logo>
          {desc2}
          <Content>
            {contenido2}
          </Content>
          <DivButton>
            <RaisedButton
              label={labelButton2}
              labelStyle={raisedButtonStyles.labelStyle}
              labelColor={raisedButtonStyles.labelColor}
              backgroundColor={raisedButtonStyles.backgroundColor}
              style={raisedButtonStyles.buttonStyle}
              buttonStyle={raisedButtonStyles.buttonStyle}
              onClick={onRegisterBtn}
              disabled={buttonDisabled2}
            />
          </DivButton>
        </Form>
      </Container>)
    );
  }
}

SessionForm.propTypes = {
  titulo: PropTypes.string,
  contenido: PropTypes.node,
  contenido2: PropTypes.node,
  labelButton: PropTypes.string,
  labelButton2: PropTypes.string,
  onPressButton: PropTypes.func,
  onRegisterBtn: PropTypes.func,
  description: PropTypes.string,
  description2: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  buttonDisabled2: PropTypes.bool,
  register: PropTypes.string,
};

export default SessionForm;
