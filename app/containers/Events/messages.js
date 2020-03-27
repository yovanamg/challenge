/*
 * Events Messages
 *
 * This contains all the text for the Events component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Events.header',
    defaultMessage: 'This is Events container !',
  },
  subHeaderTitle: 'Eventos',
  subHeaderButtonLabel: 'Nuevo evento',
  table: {
    id: 'ID',
    theme: 'Tema',
    date: 'Fecha',
    schedule: 'Horario',
    direction: 'Dirección',
    attendance: 'Asistencia',
  },
  errGetEvent: 'Error al cargar eventos.',
  newSuccess: 'Registro exitoso.',
  editSuccess: 'Cambio exitoso.',
  deleteSuccess: 'Evento eliminado correctamente.',
  error: 'Error al realizar el cambio en base de datos.',
  attendanceSuccess: 'Asistencia confirmada.',
  attendanceFail: 'Cancelo asistencia.',
});
