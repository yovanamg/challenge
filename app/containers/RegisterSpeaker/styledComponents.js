import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

export const StyledFlatButton = styled(FlatButton)`
  margin-right: 8px;
`;

export const Content = styled.div`
  width: 50%;
  background-color: #fafafa;
  margin: 2% 25%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: left;
  color: #555555;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: left;
`;

export const Number = styled.div`
  background-color: #ed1c40!important;
  border-radius: 40%;
  width: 15px;
  height: 15px;
  text-align: center;
  margin: 7px 10px 0 0;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 0 5px 30px;
  color: #ed1c40;
`;

export const TwoItems = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
`;

export const FormContainerLeftSide = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 4px 0 5px 30px;
  color: #ed1c40;
  width: 35.5%;
  float: left;
`;

export const FormContainerRightSide = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 4px 0 5px 30px;
  color: #ed1c40;
  width: 46.5%;
  float: right;
`;

export const ContentBtns = styled.div`
  width: 100%;
  text-align: right;
`;
