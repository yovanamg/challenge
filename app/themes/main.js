import {
  cyan500,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack,
  } from 'material-ui/styles/colors';

export default {
  fontFamily: 'Roboto',
  palette: {
    primary1Color: '#ed1d40',
    primary2Color: '#27464b',
    primary3Color: grey400,
    accent1Color: '#09beb6',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
  tableRow: {
    selectedColor: '#ffffff',
  },
  menuItem: {
    backgroundColor: '#ffffff',
  },
  tabs: {
    backgroundColor: '#f6f6f8',
    selectedTextColor: '#f78222',
    textColor: '#707070',
  },
  tableRowColumn: {
    fontFamily: 'Roboto',
    background: 'red',
  },
  tableHeaderColumn: {
    backgroundColor: 'red',
  },
  raisedButton: {
    textTransform: 'capitalize',
    fontWeight: 300,
  },
  flatButton: {
    textTransform: 'initial',
    fontWeight: 500,
  },
};
