/*
 * Users Messages
 *
 * This contains all the text for the Users component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Users.header',
    defaultMessage: 'This is Users container !',
  },
  table: {
    id: 'ID',
    username: 'Nombre de usuario',
    rol: 'Rol',
    date: 'Fecha creación',
    ubicacion: 'Ciudad',
  },
  subHeaderTitle: 'Usuarios',
  subHeaderButtonLabel: 'Nuevo usuario',
  empty: 'No se encontraron usuarios.',
  errList: 'Error al cargar usuarios.',
  errCities: 'Error al cargar ciudades.',
  errSave: 'Error al guardar registro, verifique su nombre de usuario.',
  saveSuccess: 'Registro exitoso.',
  cityErr: 'Error al cargar ciudad.',
  editSuccess: 'Cambio exitoso.',
  errUpdate: 'Error al editar usuario, verifique su nombre de usuario.',
  deleteSuccess: 'Usuario eliminado.',
  errCheck: 'Contraseña incorrecta.',
});
