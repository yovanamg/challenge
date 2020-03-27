/**
*
* Subheader
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  AlignRight,
  SubheaderContainer,
  SubheaderTitle,
  SubheaderButtonLabel,
  StyledAddIcon,
  DivSpecial,
} from './styledComponents';

/**
 * Componente presentacional. Pinta un Subhedear con un titulo junto a un icono de una flecha izquierda.
 * Opcionalmente tambien puede pintar un botton y un label a la derecha del subheeader.
 *
 * @param  {String}     props.title           Titulo a mostrar en el subheader
 * @param  {String}     props.buttonLabel     Label del boton (en caso de de tener bandera prendida)
 * @param  {Bool}       props.withRightButton Bandera usada para indicar que se desea pintar un boton a la derecha.
 * @param  {Function}   props.handleRightButtonClick   Function mandada llamar al hacer click al icono derecho.
 * @return {React.Component}
 */

const whiteColor = '#FFFFFF';
const user = JSON.parse(localStorage.getItem('user'));
const Subheader = ({ title, buttonLabel, withRightButton, handleRightButtonClick }) =>
  <SubheaderContainer>
    <SubheaderTitle>{title}</SubheaderTitle>
    {
      buttonLabel && user.rol === 'Admin' ?
        <DivSpecial>
          {withRightButton &&
          <AlignRight>
            <SubheaderButtonLabel
              onClick={handleRightButtonClick}
            >
              {buttonLabel}
            </SubheaderButtonLabel>
          </AlignRight>
        }
          {withRightButton &&
          <StyledAddIcon
            color={whiteColor}
            onClick={handleRightButtonClick}
          />
        }
        </DivSpecial> : ''
    }
  </SubheaderContainer>;

Subheader.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  withRightButton: PropTypes.bool,
  handleRightButtonClick: PropTypes.func,
};

Subheader.defaultProps = {
  withRightButton: false,
  showLeftIcon: true,
};

export default Subheader;
