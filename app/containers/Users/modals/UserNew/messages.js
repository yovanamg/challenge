/*
 * UserNew Messages
 *
 * This contains all the text for the UserNew component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.UserNew.header',
    defaultMessage: 'This is UserNew container !',
  },
  dialogButtons: {
    yesButtonLabel: 'Guardar',
    noButtonLabel: 'Cancelar',
  },
  solicitudDialogTitle: 'Nuevo usuario',
  firstPart: 'Información',
  username: 'Nombre de usuario',
  roles: 'Roles',
  city: 'Ciudad',
  pass: 'Contraseña',
  confirmPass: 'Confirmar Contraseña',
  passErr: '* Las constraseñas no coinciden.'
});
