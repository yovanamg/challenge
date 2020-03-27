/*
 * Speakers Messages
 *
 * This contains all the text for the Speakers component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Speakers.header',
    defaultMessage: 'This is Speakers container !',
  },
  subHeaderTitle: 'Ponentes',
  table: {
    id: 'ID',
    name: 'Nombre de contacto',
    email: 'Correo electrónico',
    title: 'Titulo de charla',
    abstract: 'Abstract de charla',
    biography: 'Biografía',
  },
  errGet: 'Error al cargar ponentes.',
  empty: 'No se encontraron ponentes.',
});
