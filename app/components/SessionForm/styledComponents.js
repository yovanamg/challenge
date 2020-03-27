import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

export const Container = styled.div`
  height: 100vh;
  background: #ed1c40 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  height: 450px;
  width: 35%;
  background: #ffffff;
  padding: 15px 20px 10px 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;

export const ImgLogo = styled.img`
  width: 20%;
`;

export const Titulo = styled.div`
  font-size: 25px;
  color: #555555;
  height: 15%;
  text-align: center;
  margin-bottom: 5%;
`;

export const Logo = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  height: 40%;
  margin: 0 15% 0 15%;
`;

export const DivButton = styled.div`
  textAlign: right;
  margin-top: 5%;
`;

export const ActionButton = styled(FlatButton)`
  display: flex;
  border-radius: 26px !important;
  &:hover ${ActionButton}{
    backgroundColor: #ffffff !important;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.07); !important;
  }
`;

export const ContentRegister = styled.div`
  width: 100%;
  height: 20%;
`;

export const Register = styled.div`
  width: 60%;
  padding-left: 16%;
  float: left;
  margin-top: 22px;
`;

export const StyledFlatButton = styled(FlatButton)`
  margin-top: 20px;
`;

export const Theme = styled.div`
  width: 60%;
  float: left;
  margin-top: 22px;
`;
