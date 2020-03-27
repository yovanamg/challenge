/**
*
* Description
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styledComponents';


function Description({ description }) {
  return (
    <Container className={'desc'}>
      {description}
    </Container>
  );
}

Description.propTypes = {
  description: PropTypes.string,
};

export default Description;
