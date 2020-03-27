/*
 * RegisterSpeaker Messages
 *
 * This contains all the text for the RegisterSpeaker component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.RegisterSpeaker.header',
    defaultMessage: 'This is RegisterSpeaker container !',
  },
  subHeaderTitle: 'Registrate como ponente',
  information: 'Información',
  name: 'Nombre de contacto',
  email: 'Correo electrónico',
  title: 'Titulo de charla',
  abstract: 'Abstract de charla',
  biographies: 'Biografía',
  cancel: 'Cancelar',
  save: 'Guardar',
  newSuccess: 'Registro exitoso.',
  error: 'Error en registro de ponente.',
  errGet: 'Error al cargar ponentes.',
});
