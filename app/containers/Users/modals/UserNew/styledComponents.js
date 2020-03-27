import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

export const StyledFlatButton = styled(FlatButton)`
  margin-right: 8px;
`;

export const DialogTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const DialogTitle = styled.div`
  font-size: 24px;
  margin-left: 7%;
  font-weight: 800;
  color: #494949;
`;

export const FormContainer = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 5px 0 5px 50px;
  color: #006abb;
  line-height: 2.3;
`;

export const FormContainerLeftSide = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 5px 0 0 49px;
  color: #006abb;
  width: 35%;
  float: left;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: left;
  color: #555555;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Number = styled.div`
  background-color: #006cb9 !important;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-align: center;
  color: white;
  margin-right: 25px;
`;

export const FormContainerRightSide = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 5px 0 0 0;
  color: #006abb;
  width: 48%;
  float: right;
`;

export const TwoItems = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
`;

export const FormContainerErr = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 0px 0 5px 50px;
  color: red;
  line-height: 2.3;
`;
