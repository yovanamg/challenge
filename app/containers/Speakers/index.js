/* eslint-disable react/prop-types */
/*
 *
 * Speakers
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectSpeakers from './selectors';
import messages from './messages';
import Snackbar from 'material-ui/Snackbar';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';
import Pagination from 'material-ui-pagination';
import Subheader from 'components/Subheader';
import FullPageLoader from 'components/FullPageLoader';
import Empty from 'components/Icons/empty.svg';
import SpeakerItem from 'components/SpeakerItem';
import {
  MainDivStyled,
  LoaderContainer,
  SpeakerContainer,
  MessageEmpty,
  ImgEmpty,
  ContainerEmpty,
  ContainerPagination,
} from './styledComponents';
import { styles } from './styles';
import {
  dataPagination,
  setSnackbarState,
} from './actions';

export class Speakers extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onChange = (number) => {
    const { dispatch, Events: { itemsPagination } } = this.props;
    const body = {
      number,
      itemsPagination,
    };
    dispatch(dataPagination('number', body));
  };

  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(setSnackbarState(false, ''));
  };

  handleOpenModal = (name, obj) => () => {
  }

  filter = () => {
    const { speakers } = this.props.Speakers;
    const items = [];
    speakers.forEach((speaker) => {
      items.push(
        <SpeakerItem
          key={speaker.id}
          speaker={speaker}
          detailsSpeaker={this.handleOpenModal('detail', speaker)}
        />
      );
    });
    return items;
  };


  render() {
    const {
      Speakers: {
        loading,
        loadingSpeakers,
        itemsPagination,
        total,
        number,
        display,
        speakers,
        snackbar,
      },
    } = this.props;
    return (
      <div>
        <Helmet
          title="Speakers"
          meta={[
            { name: 'description', content: 'Description of Speakers' },
          ]}
        />
        <Subheader
          withRightButton
          title={messages.subHeaderTitle}
        />
        {
          !loadingSpeakers ? (
            <SpeakerContainer>
              {
                speakers.length > 0 ?
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
                            {messages.table.name}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabThree}>
                            {messages.table.email}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabFour}>
                            {messages.table.title}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabFive}>
                            {messages.table.abstract}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledTabFive}>
                            {messages.table.biography}
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
            </SpeakerContainer>
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

Speakers.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Speakers: makeSelectSpeakers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Speakers);
