const blueColor = '#ed1c40';
const greyColor = '#cac5c5';
const font = 'Helvetica, Arial, sans-serif';
const styles = {
  textfield: {
    correo: {
      float: 'left',
      width: '100%',
      height: '100%',
      fontFamily: `${font}`,
      border: `1px solid ${greyColor}`,
      borderRadius: '4px',
      inputStyle: {
        fontFamily: `${font}`,
        height: '35px',
        fontSize: '16px',
        paddingLeft: '8px',
        marginTop: '0',
      },
      labelStyle: {
        top: '6px',
        marginLeft: '5px',
        color: '#9e9e9e',
        fontFamily: `${font}`,
      },
      labelStyleFocused: {
        top: '3px',
        marginLeft: '5px',
        fontFamily: `${font}`,
        color: `${blueColor}`,
      },
      errorStyle: {
        top: '5px',
        marginBottom: '-12px',
        marginLeft: '5px',
        fontFamily: `${font}`,
      },
    },
    correoFocused: {
      float: 'left',
      fontFamily: `${font}`,
      width: '100%',
      height: '100%',
      border: `1px solid ${blueColor}`,
      borderRadius: '4px',
    },
    password: {
      inputStyle: {
        border: `1px solid ${greyColor}`,
        borderRadius: '4px',
        height: '35px',
        bottom: '-18px',
        fontSize: '25px',
        fontFamily: `${font}`,
        paddingLeft: '8px',
      },
      inputStyleFocused: {
        border: `1px solid ${blueColor}`,
        borderRadius: '4px',
        height: '35px',
        bottom: '-18px',
        fontSize: '25px',
        fontFamily: `${font}`,
        paddingLeft: '8px',
      },
      label: {
        top: '34px',
        marginLeft: '5px',
        fontFamily: `${font}`,
        color: '#9e9e9e',
      },
      labelStyleFocused: {
        top: '39px',
        fontFamily: `${font}`,
        marginLeft: '5px',
        color: `${blueColor}`,
      },
      errorStyle: {
        top: '20px',
        bottom: '0',
        fontFamily: `${font}`,
        marginLeft: '5px',
      },
    },
    confirmPassword: {
      inputStyle: {
        border: `1px solid ${greyColor}`,
        borderRadius: '4px',
        height: '35px',
        bottom: '-18px',
        fontSize: '25px',
        fontFamily: `${font}`,
        paddingLeft: '8px',
      },
      inputStyleFocused: {
        border: `1px solid ${blueColor}`,
        borderRadius: '4px',
        height: '35px',
        bottom: '-18px',
        fontSize: '25px',
        fontFamily: `${font}`,
        paddingLeft: '8px',
      },
      label: {
        top: '34px',
        marginLeft: '5px',
        fontFamily: `${font}`,
        color: '#9e9e9e',
      },
      labelStyleFocused: {
        top: '39px',
        fontFamily: `${font}`,
        marginLeft: '5px',
        color: `${blueColor}`,
      },
      errorStyle: {
        top: '20px',
        bottom: '0',
        fontFamily: `${font}`,
        marginLeft: '5px',
      },
    },
  },
  div: {
    logo: {
      height: '35%',
    },
  },
};
export default styles;
