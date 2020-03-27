/**
 * styledComponents
 *
 */

import styled from 'styled-components';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

export const AlignRight = styled.div`
  float: right;
  text-align: right;
  width: auto;
  margin-left: 5px;
`;

export const SubheaderContainer = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 120px;
  display: flex;
  align-items: center;
  background-color: #ed1c40;
`;

export const SubheaderTitle = styled.span`
  padding-left: 15px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0px;
  color: white;
  width: 70%;
`;

export const SubheaderButtonLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white !important;
  padding-right: 10px;
  cursor: pointer;
`;

export const StyledArrowBackIcon = styled(ArrowBackIcon)`
  cursor: pointer;
`;

export const StyledAddIcon = styled(AddIcon)`
  float: right;
  cursor: pointer;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

export const DivSpecial = styled.div`
  margin: 0px;
  padding: 0px;
  width: 30%;
`;
