export const styles = {
  Input: {
    cursor: 'pointer',
    width: 'auto',
    overflow: 'visible',
    display: 'block',
    height: '40px',
    lineHeight: '0',
    padding: '2%',
    borderRadius: '4px',
    border: 'solid 1px #cac5c5',
    transition: 'all .25s',
    fontSize: '15px',
    marginLeft: '50px',
    marginRight: '50px',
  },
  InputLeftSide: {
    cursor: 'pointer',
    width: '39%',
    overflow: 'visible',
    display: 'block',
    height: '40px',
    lineHeight: '0',
    padding: '2%',
    borderRadius: '4px',
    border: 'solid 1px #cac5c5',
    transition: 'all .25s',
    fontSize: '15px',
    marginLeft: '50px',
    float: 'left',
  },
  InputRightSide: {
    cursor: 'pointer',
    width: '40%',
    overflow: 'visible',
    display: 'block',
    height: '40px',
    lineHeight: '0',
    padding: '2%',
    borderRadius: '4px',
    border: 'solid 1px #cac5c5',
    transition: 'all .25s',
    fontSize: '15px',
    float: 'right',
    marginRight: '50px',
  },
  textField: {
    marginTop: '0',
  },
};


export const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: '80%',
    margin: '10px 0 5px 50px',
  })
};
