import styled from 'styled-components';

export const TopBarSection = styled.div`
  width: 100%;
  height: 50px;
  background-color: #FFFFFF;
  border-bottom: solid 2px #ed1c40;
  position: fixed;
  top: 0;
  z-index: 99;
`;

export const MenuLeftSection = styled.div`
  width: 80%;
  padding: 0 0 0 25px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  float: left;
`;

export const MenuRightSection = styled.div`
  width: 20%;
  height: 50px;
  float: right;
`;

export const ProfileSection = styled.div`
  width: auto;
  height: auto;
  padding: 8px 0%;
`;

export const DataSection = styled.div`
  width: 50%;
  height: 100%;
  float: left;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #423e3e;
  overflow: hidden;
  text-align: right;
  white-space: nowrap;
`;

export const UserRole = styled.div`
  opacity: 0.7;
  font-size: 12px;
  font-weight: 400;
  color: #423e3e;
  overflow: hidden;
  text-align: right;
  white-space: nowrap;
`;

export const AvatarSection = styled.div`
  width: 15%;
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowSection = styled.div`
  width: 5%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const SpacingDiv = styled.div`
  height: 50px;
  width: 100%;
`;

export const IconSection = styled.div`
  cursor: pointer;
`;

export const IconSectionSelected = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MenuOptionEvent = styled.div`
  display: inline;
  font-size: 14px;
  font-weight: 400;
  color: #423e3e;
  margin: 0;
  float: left;
  cursor: pointer;
  margin-right: 12px;
`;

export const MenuEventSelected = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #423e3e;
  height: 100%;
  border-bottom: 6px solid white;
  display: flex;
  align-items: center;
  padding-top: 7px;
  float: left;
  cursor: pointer;
  margin-right: 12px;
`;

export const MenuOptionsSection = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuOptions = styled.div`
  height: 100%;
  margin-left: 20px;
`;

export const ImgLogo = styled.img`
  height: 30px;
`;

export const MenuOptionSpeaker = styled.div`
  display: inline;
  font-size: 14px;
  font-weight: 400;
  color: #423e3e;
  margin: 0;
  float: left;
  cursor: pointer;
  margin-right: 12px;
`;

export const MenuSpeakerSelected = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #423e3e;
  height: 100%;
  border-bottom: 6px solid white;
  display: flex;
  align-items: center;
  padding-top: 7px;
  float: left;
  cursor: pointer;
  margin-right: 12px;
`;