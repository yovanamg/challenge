/* eslint-disable react/prop-types */
/*
 *
 * RegisterSpeaker
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import makeSelectRegisterSpeaker from './selectors';
import messages from './messages';
import { styles } from './styles';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Subheader from 'components/Subheader';
import {
  Content,
  TitleContainer,
  Number,
  Title,
  FormContainer,
  TwoItems,
  FormContainerLeftSide,
  FormContainerRightSide,
  StyledFlatButton,
  ContentBtns,
} from './styledComponents';
import {
  flatButtonStyles,
  raisedButtonStyles,
} from './materialInlineStyles';
import {
  setSnackbarState,
  saveData,
  actionSpeaker,
} from './actions';

export class RegisterSpeaker extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleOnChange = (e) => {
    const { dispatch } = this.props;
    const name = e.target.name;
    const value = e.target.value;
    dispatch(saveData(name, value.replace(/[^Aa-zA-Záéíóúü´ñ0-9., ]/gi, '')));
  }

  handleSave = () => {
    const {
      dispatch,
      RegisterSpeaker: {
        name,
        email,
        title,
        abstract,
        biography,
      },
    } = this.props;
    const body = {
      name,
      email,
      title,
      abstract,
      biography,
    };
    dispatch(actionSpeaker(body));
  }

  handleCancel = () => {
    const { dispatch } = this.props;
    browserHistory.push('/');
    dispatch(saveData('cancel', ''));
  }

  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(setSnackbarState(false, ''));
  };

  render() {
    const {
      RegisterSpeaker: {
        name,
        email,
        title,
        abstract,
        biography,
        snackbar,
      },
    } = this.props;
    return (
      <div>
        <Helmet
          title="RegisterSpeaker"
          meta={[
            { name: 'description', content: 'Description of RegisterSpeaker' },
          ]}
        />
        <Subheader
          withRightButton
          title={messages.subHeaderTitle}
        />
        <Content>
          <TitleContainer>
            <Number></Number>
            <Title>{messages.information}</Title>
          </TitleContainer>
          <FormContainer>{messages.name}</FormContainer>
          <TwoItems>
            <TextField
              underlineShow={false}
              name="name"
              style={styles.InputLeftSideSpecial}
              inputStyle={styles.textField}
              onChange={this.handleOnChange}
              value={name}
            />
          </TwoItems>
          <TwoItems>
            <FormContainerLeftSide>{messages.email}</FormContainerLeftSide>
            <FormContainerRightSide>{messages.title}</FormContainerRightSide>
          </TwoItems>
          <TwoItems>
            <TextField
              underlineShow={false}
              name="email"
              style={styles.InputLeftSide}
              inputStyle={styles.textField}
              onChange={this.handleOnChange}
              value={email}
            />
            <TextField
              underlineShow={false}
              name="title"
              style={styles.InputRightSide}
              inputStyle={styles.textField}
              onChange={this.handleOnChange}
              value={title}
            />
          </TwoItems>
          <FormContainer>{messages.abstract}</FormContainer>
          <TwoItems>
            <TextField
              underlineShow={false}
              name="abstract"
              style={styles.InputLeftSideSpecial}
              inputStyle={styles.textField}
              onChange={this.handleOnChange}
              value={abstract}
            />
          </TwoItems>
          <FormContainer>{messages.biography}</FormContainer>
          <TextField
            multiLine
            name="biography"
            value={biography}
            style={styles.InputBiographies}
            onChange={this.handleOnChange}
            onKeyUp={this.handleOnChange}
            rowsMax={10}
            placeholder="Escribe aquí..."
          />
          <ContentBtns>
            <StyledFlatButton
              label={messages.cancel}
              labelStyle={flatButtonStyles.labelStyle}
              style={flatButtonStyles.style}
              onClick={this.handleCancel}
            />
            <RaisedButton
              label={messages.save}
              labelStyle={raisedButtonStyles.labelStyle}
              labelColor={raisedButtonStyles.labelColor}
              backgroundColor={raisedButtonStyles.backgroundColor}
              style={raisedButtonStyles.buttonStyle}
              buttonStyle={raisedButtonStyles.buttonStyle}
              onClick={this.handleSave}
              disabled={!name || !email || !title || !abstract || !biography}
            />
          </ContentBtns>
        </Content>
        <Snackbar
          open={snackbar.open}
          message={snackbar.text}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestCloseSnackBar}
        />
      </div>
    );
  }
}

RegisterSpeaker.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RegisterSpeaker: makeSelectRegisterSpeaker(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSpeaker);
