import styled from 'styled-components';

export const MainDivStyled = styled.div`
  width: 100%;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12);
  border-style: solid;
  border-width: 1px;
  border-imageSource: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0));
  border-imageSlice: 1;
  margin: 0 auto;
`;

export const LoaderContainer = styled.div`
  float: left;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

export const EventsContainer = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  min-height: calc(120vh - 220px);
  float: left;
  padding: 2% 5%;
`;

export const MessageEmpty = styled.div`
  text-align: center;
  font-size: 25px;
  letter-spacing: 0.7px;
  padding-top: 3%;
  margin-bottom: 2%
`;

export const ImgEmpty = styled.img`
  text-align: center;
`;

export const ContainerEmpty = styled.div`
  text-align: center;
`;

export const ContainerPagination = styled.div`
  width: 100%;
  text-align: center;
`;
