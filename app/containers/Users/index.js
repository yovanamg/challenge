/*
 *
 * Users
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';
import Empty from 'components/Icons/empty.svg';
import UserItem from 'components/UserItem';
import FullPageLoader from 'components/FullPageLoader';
import Moment from 'moment/min/moment-with-locales'; 
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectUsers from './selectors';
import Pagination from 'material-ui-pagination';
import messages from './messages';
import {
  MainDivStyled,
  LoaderContainer,
  UsersContainer,
  MessageEmpty,
  ImgEmpty,
  ContainerEmpty,
  ContainerPagination,
} from './styledComponents';
import { styles } from './styles';
import {
  saveUser,
  newUser,
  saveEditUser,
  setSnackbarState,
  openModal,
  checkPassword,
  dataPagination,
} from './actions';
import UserNew from './modals/UserNew';
import UserEdit from './modals/UserEdit';
import UserDelete from './modals/UserDelete';

export class Users extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  onChange = (number) => {
    const { dispatch, Users: { itemsPagination } } = this.props;
    const body = {
      number,
      itemsPagination,
    }
    dispatch(dataPagination('number', body));
  };

  handleOpenModal = (name, obj) => () => {
    const {
      dispatch,
      Users: {
        showModalNew,
        showModalEdit,
        showModalDelete,
      }
    } = this.props;
    switch(name) {
      case 'new':
        dispatch(saveUser('delete', ''));
        dispatch(openModal('new', !showModalNew))
        break
      case 'edit':
        dispatch(saveUser('currentUser', obj));
        dispatch(openModal('edit', !showModalEdit));
        break
      case 'delete':
        dispatch(saveUser('currentUser', obj));
        dispatch(openModal('delete', !showModalDelete));
        break
      default:
        break
    }
  };

  handleCancel = (name) => () => {
    const {
      dispatch,
      Users: {
        showModalNew,
        showModalEdit,
        showModalDelete,
      }
    } = this.props;
    dispatch(saveUser('delete', ''));
    switch(name) {
      case 'new':
        dispatch(openModal('new', !showModalNew));
        break
      case 'edit':
        dispatch(openModal('edit', !showModalEdit));
        break
      case 'delete':
        dispatch(openModal('delete', !showModalDelete));
        break
      default:
        break;
    }
  };

  handleSystem = () => {
    const { Users: { rol  } } = this.props;
    switch(rol) {
      case 'Admin': 
        return 'Admin';
        break;
      default:
        break;
    }
  }
  handleSaveUser = () => {
    const {
      dispatch,
      Users: {
        email,
        password,
        rol,
      },
    } = this.props;
    const body = {
      email,
      password,
      rol,
      createdAt: Moment().format("MM/DD/YYYY"),
    };
    dispatch(newUser(body));
  };

  handleEditUser = () => {
    const {
      dispatch,
      Users:{
        email,
        rol,
        id,
        password,
      },
    } = this.props;
    let body = {};
    if(password !== '') {
      body = {
        email,
        rol,
        id,
        password,
        updatedAt: Moment().format("MM/DD/YYYY"),
      };
    } else {
      body = {
        email,
        rol,
        id,
        updatedAt: Moment().format("MM/DD/YYYY"),
      };
    }
    dispatch(saveEditUser('edit', body));
  }

  handleUserDelete = () => {
    const { dispatch, Users: { id } } = this.props;
    const body = {
      id,
      estatus: false,
      updatedAt: Moment().format("MM/DD/YYYY"),
    };
    dispatch(saveEditUser('delete', body));
  };

  filter = () => {
    const { users } = this.props.Users;
    const filteredItems = [];
    users.forEach((user) => {
      filteredItems.push(
        <UserItem
          key={user.id}
          user={user}
          editUser={this.handleOpenModal('edit', user)}
          deleteUser={this.handleOpenModal('delete', user)}
        />
      );
    });
    return filteredItems;
  }

  handleOnChange = (e) => {
    const { dispatch } = this.props;
    const name = e.target.name;
    const value = e.target.value;
    const object = e.target.object;
    if (name === 'rol') {
      dispatch(saveUser(name, value));
    } else {
      dispatch(saveUser(name, value.replace(/[^Aa-zA-Záéíóúü´ñ0-9 ]/gi, '')));
    }
  };

  handleCheckPass= () => {
    const { dispatch, Users: { lastPass, id } } = this.props;
    const body = { lastPass, id };
    dispatch(checkPassword(body));
  };

  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(setSnackbarState(false, ''));
  }

  render() {
    const {
      Users: {
        loading,
        subLoading,
        loadingUsers,
        snackbar,
        users,
        showModalNew,
        showModalEdit,
        showModalDelete,
        id,
        email,
        password,
        confirmPassword,
        rol,
        roles,
        validation,
        lastPass,
        itemsPagination,
        number,
        total,
        display,
      }
    } = this.props;

    const currentUser = {
      id,
      email,
      password,
      confirmPassword,
      rol,
      lastPass,
    };
    
    return (
      <div>
        <Helmet
          title="Usuarios"
          meta={[
            { name: 'description', content: 'Description of Users' },
          ]}
        />
        <Subheader
          withRightButton
          title={messages.subHeaderTitle}
          buttonLabel={messages.subHeaderButtonLabel}
          handleRightButtonClick={this.handleOpenModal('new')}
          handleLeftIconClick={() => browserHistory.push('/home')}
        />
        {!loadingUsers ? (
          <UsersContainer>
            {
              users.length > 0 ?
              <MainDivStyled>
                { !subLoading ?
                  <Table>
                    <TableHeader
                      enableSelectAll={false}
                      displaySelectAll={false}
                      adjustForCheckbox={false}
                    >
                      <TableRow style={styles.TableHeaderHeight}>
                        <TableHeaderColumn style={styles.TableHeaderStyledTabOne}>
                          {messages.table.id}
                        </TableHeaderColumn>
                        <TableHeaderColumn style={styles.TableHeaderStyledTabTwo}>
                          {messages.table.username}
                        </TableHeaderColumn>
                        <TableHeaderColumn style={styles.TableHeaderStyledTabThree}>
                          {messages.table.rol}
                        </TableHeaderColumn>
                        <TableHeaderColumn style={styles.TableHeaderStyledTabFive}>
                          {messages.table.date}
                        </TableHeaderColumn>
                        <TableHeaderColumn style={styles.TableHeaderStyledButtons} />
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      {this.filter()}
                    </TableBody>
                  </Table>
                  : <CircularProgress style={{ textAlign: 'center', margin: '16px auto', display: 'block' }} size={80} thickness={5} />
                }
                {
                  itemsPagination.length > 10 ?
                    <ContainerPagination>
                      <Pagination
                        total={total}
                        current={number}
                        display={display}
                        onChange={this.onChange}
                      />
                    </ContainerPagination>
                    : ''
                }
              </MainDivStyled>
              : <ContainerEmpty>
                <MessageEmpty>{messages.empty}</MessageEmpty>
                <ImgEmpty src={Empty}></ImgEmpty>
              </ContainerEmpty>
            }
            <Snackbar
              open={snackbar.open}
              message={snackbar.text}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestCloseSnackBar}
            />
            <UserNew
              open={showModalNew}
              handleCancel={this.handleCancel('new')}
              handleOnChange={this.handleOnChange}
              handleSave={this.handleSaveUser}
              cities={cities}
              currentUser={currentUser}
              roles={roles}
            ></UserNew>
            <UserEdit
              open={showModalEdit}
              handleCancel={this.handleCancel('edit')}
              handleOnChange={this.handleOnChange}
              handleSave={this.handleEditUser}
              cities={cities}
              currentUser={currentUser}
              roles={roles}
              handleCheckPass={this.handleCheckPass}
              validation={validation}
            >
            </UserEdit>
            <UserDelete
              open={showModalDelete}
              handleCancel={this.handleCancel('delete')}
              handleSave={this.handleUserDelete}
              currentUser={currentUser}
            >
            </UserDelete>
            </UsersContainer>)
            :
            <LoaderContainer>
              <FullPageLoader />
            </LoaderContainer>  
        }
        {
          loading && <FullPageLoader />
        }
      </div>
    );
  }
}

Users.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
