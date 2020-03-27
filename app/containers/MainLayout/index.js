/*
 *
 * MainLayout
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TopBar from 'components/TopBar';
import makeSelectMainLayout from './selectors';
import messages from './messages';

export class MainLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let selectedItem = messages.menuOptions.logo;
    if (window.location.pathname.toString().includes('events')) {
      selectedItem = messages.menuOptions.events;
    } else if (window.location.pathname.toString().includes('speakers')) {
      selectedItem = messages.menuOptions.speaker;
    }

    return (
      <div>
        <TopBar
          selectedItem={selectedItem}
        />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  MainLayout: makeSelectMainLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
