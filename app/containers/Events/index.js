/*
 *
 * Events
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectEvents from './selectors';
import messages from './messages';
// import Moment from 'moment/min/moment-with-locales';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';
import Pagination from 'material-ui-pagination';
import Snackbar from 'material-ui/Snackbar';
import FullPageLoader from 'components/FullPageLoader';
import Empty from 'components/Icons/empty.svg';
import Subheader from 'components/Subheader';
import EventItem from 'components/EventItem';
import {
  MainDivStyled,
  LoaderContainer,
  EventsContainer,
  MessageEmpty,
  ImgEmpty,
  ContainerEmpty,
  ContainerPagination,
} from './styledComponents';
import { styles } from './styles';
import {
  setSnackbarState,
  openModal,
  saveData,
  dataPagination,
  actionEvent,
} from './actions';
import EventNew from './modals/EventNew';
import EventEdit from './modals/EventEdit';
import EventDelete from './modals/EventDelete';
const user = JSON.parse(localStorage.getItem('user'));

export class Events extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onChange = (number) => {
    const { dispatch, Events: { itemsPagination } } = this.props;
    const body = {
      number,
      itemsPagination,
    };
    dispatch(dataPagination('number', body));
  };

  handleOpenModal = (name, obj) => () => {
    const {
      dispatch,
      Events: {
        showModalNew,
        showModalEdit,
        showModalDelete,
      },
    } = this.props;
    switch (name) {
      case 'new':
        dispatch(saveData('cancel', ''));
        dispatch(openModal('new', !showModalNew));
        break;
      case 'edit':
        dispatch(saveData('currentEvent', obj));
        dispatch(openModal('edit', !showModalEdit));
        break;
      case 'delete':
        dispatch(saveData('currentEvent', obj));
        dispatch(openModal('delete', !showModalDelete));
        break;
      default:
        break;
    }
  };

  handleCancel = (name) => () => {
    const {
      dispatch,
      Events: {
        showModalNew,
        showModalEdit,
        showModalDelete,
      },
    } = this.props;
    dispatch(saveData('cancel', ''));
    switch (name) {
      case 'new':
        dispatch(openModal('new', !showModalNew));
        break;
      case 'edit':
        dispatch(openModal('edit', !showModalEdit));
        break;
      case 'delete':
        dispatch(openModal('delete', !showModalDelete));
        break;
      default:
        break;
    }
  };

  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(setSnackbarState(false, ''));
  };

  filter = () => {
    const { events } = this.props.Events;
    const items = [];
    events.forEach((event) => {
      items.push(
        <EventItem
          key={event.id}
          event={event}
          editEvent={this.handleOpenModal('edit', event)}
          deleteEvent={this.handleOpenModal('delete', event)}
          handleAttendance={this.handleAttendance(event)}
        />
      );
    });
    return items;
  };

  handleOnChange = (e) => {
    const { dispatch } = this.props;
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'theme':
      case 'schedule':
      case 'direction':
        dispatch(saveData(name, value.replace(/[^Aa-zA-Záéíóúü´ñ0-9., ]/gi, '')));
        break;
      case 'date':
        dispatch(saveData(name, value));
        break;
      default:
        break;
    }
  }

  handleSave = (name) => () => {
    const {
      dispatch,
      Events: {
        id,
        theme,
        date,
        schedule,
        direction,
      },
    } = this.props;
    let body = {};
    switch (name) {
      case 'new':
        body = { theme, date, schedule, direction };
        dispatch(actionEvent('new', body));
        break;
      case 'edit':
        body = { id, theme, date, schedule, direction };
        dispatch(actionEvent('edit', body));
        break;
      case 'delete':
        body = { id };
        dispatch(actionEvent('delete', body));
        break;
      default:
        break;
    }
  }

  handleAttendance = (event) => () => {
    const { dispatch } = this.props;
    dispatch(actionEvent('attendance', event));
  }

  render() {
    const {
      Events: {
        loading,
        loadingEvents,
        snackbar,
        events,
        showModalNew,
        showModalEdit,
        showModalDelete,
        itemsPagination,
        total,
        number,
        display,
        id,
        theme,
        date,
        schedule,
        direction,
      },
    } = this.props;

    return (
      <div>
        <Helmet
          title="Events"
          meta={[
            { name: 'description', content: 'Description of Events' },
          ]}
        />
        <Subheader
          withRightButton
          title={messages.subHeaderTitle}
          buttonLabel={messages.subHeaderButtonLabel}
          handleRightButtonClick={this.handleOpenModal('new')}
        />
        {
          !loadingEvents ? (
            <EventsContainer>
              {
                events.length > 0 ?
                  <MainDivStyled>
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
                            {messages.table.theme}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabThree}>
                            {messages.table.date}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabFour}>
                            {messages.table.schedule}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabFive}>
                            {messages.table.direction}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabSix}>
                            { user.rol !== 'Admin' ? messages.table.attendance : '' }
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledButtons} />
                        </TableRow>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}>
                        { this.filter() }
                      </TableBody>
                    </Table>
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
                :
                  <ContainerEmpty>
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
              <EventNew
                open={showModalNew}
                theme={theme}
                date={date}
                schedule={schedule}
                direction={direction}
                handleCancel={this.handleCancel('new')}
                handleOnChange={this.handleOnChange}
                handleSave={this.handleSave('new')}
              />
              <EventEdit
                open={showModalEdit}
                theme={theme}
                date={date}
                schedule={schedule}
                direction={direction}
                handleCancel={this.handleCancel('edit')}
                handleOnChange={this.handleOnChange}
                handleSave={this.handleSave('edit')}
              />
              <EventDelete
                open={showModalDelete}
                theme={theme}
                id={id}
                handleCancel={this.handleCancel('delete')}
                handleSave={this.handleSave('delete')}
              />
            </EventsContainer>
          ) :
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

Events.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Events: makeSelectEvents(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
