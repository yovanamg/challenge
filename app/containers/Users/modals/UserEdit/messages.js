/*
 * UserEdit Messages
 *
 * This contains all the text for the UserEdit component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.UserEdit.header',
    defaultMessage: 'This is UserEdit container !',
  },
  dialogButtons: {
    yesButtonLabel: 'Guardar',
    noButtonLabel: 'Cancelar',
    check: 'Verificar',
  },
  solicitudDialogTitle: 'Editar usuario',
  firstPart: 'Información',
  username: 'Nombre de usuario',
  roles: 'Roles',
  city: 'Ciudad',
  clave: 'Clave',
  changePass: 'Cambio de contraseña',
  lastPass: 'Contraseña anterior',
  check: 'Verificar contraseña',
  pass: 'Nueva contraseña',
  confirmPass: 'Confirma contraseña',
  passErr: 'Contraseñas no coinciden.'
});
