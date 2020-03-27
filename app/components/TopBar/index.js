/**
*
* TopBar
*
*/

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Avatar from 'material-ui/Avatar';
import ArrowDropDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { mapRolesToPretty } from 'utils/usersRoles';
import messages from './messages';
import { styles } from './styles';
import {
  TopBarSection,
  MenuLeftSection,
  MenuRightSection,
  ProfileSection,
  DataSection,
  UserName,
  UserRole,
  AvatarSection,
  ArrowSection,
  SpacingDiv,
  IconSectionSelected,
  IconSection,
  MenuEventSelected,
  MenuOptionEvent,
  MenuOptionsSection,
  MenuOptions,
  MenuSpeakerSelected,
  MenuOptionSpeaker,
  ImgLogo,
} from './styledComponents';

class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  whiteColor = '#ed1c40';
  userImageUrl = 'https://www.uic.mx/posgrados/files/2018/05/default-user.png';
  user = JSON.parse(localStorage.getItem('user'));
  userName = this.user ? `${this.user.email} ` : '';
  userRole = this.user ? mapRolesToPretty(this.user.rol) : '';
  handleLogout = () => {
    localStorage.removeItem('user');
    browserHistory.replace('/');
  }

  render() {
    const { selectedItem } = this.props;
    const Logo = selectedItem === messages.menuOptions.logo ? IconSectionSelected : IconSection;
    const Event = selectedItem === messages.menuOptions.events ? MenuEventSelected : MenuOptionEvent;
    const Speaker = selectedItem === messages.menuOptions.speaker ? MenuSpeakerSelected : MenuOptionSpeaker;

    return (
      <div>
        <TopBarSection>
          <MenuLeftSection>
            <Logo onClick={() => browserHistory.push('/home')}>
            </Logo>
            <MenuOptions>
              <MenuOptionsSection>
                {
                  <Event onClick={() => browserHistory.push('/events')}>
                    <a>{messages.menuOptions.events}</a>
                  </Event>
                }
                {
                  this.user.rol === 'Admin' ?
                    <Speaker onClick={() => browserHistory.push('/speakers')}>
                      <a>{messages.menuOptions.speaker}</a>
                    </Speaker> : ''
                }
              </MenuOptionsSection>
            </MenuOptions>
          </MenuLeftSection>
          <MenuRightSection>
            <ProfileSection>
              <DataSection>
                <UserName>
                  {this.userName}
                </UserName>
                <UserRole>
                  {this.userRole}
                </UserRole>
              </DataSection>
              <AvatarSection>
                <Avatar
                  style={styles.image}
                  src={this.userImageUrl}
                />
              </AvatarSection>
              <ArrowSection>
                <IconMenu
                  iconButtonElement={
                    <IconButton>
                      <ArrowDropDownIcon
                        color={this.whiteColor}
                      />
                    </IconButton>}
                  targetOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                >
                  <MenuItem
                    value="1"
                    primaryText="Cerrar sesión"
                    onClick={this.handleLogout}
                  />
                </IconMenu>
              </ArrowSection>
            </ProfileSection>
          </MenuRightSection>
        </TopBarSection>
        <SpacingDiv />
      </div>
    );
  }
}

TopBar.propTypes = {
  selectedItem: PropTypes.string,
};

export default TopBar;
