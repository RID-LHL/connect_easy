const Types = require('mongoose').Types;
const Appointment = require('../../models/appointment');
const moment = require('moment');

const getAppointmentsForClientId = async (req, res) => {
  try {
    const { clientId } = req.params;

    const appointments = await Appointment.find({
      client: Types.ObjectId(clientId),
    });

    /**
     * Event {
        title: string,
        start: Date,
        end: Date,
        allDay?: boolean
        resource?: any,
      }
     */

    const parsedAppointments = appointments.map((appointment) => {
      const newDate = moment(appointment.date).format('YYYY-MM-DD');
      const startTime = moment(appointment.appointmentStartTime).format(
        'HH:mm'
      );
      const endTime = moment(appointment.appointmentEndTime).format('HH:mm');

      const newStartTime = moment(newDate + ' ' + startTime).format(
        'YYYY-MM-DD HH:mm'
      );
      const newEndTime = moment(newDate + ' ' + endTime).format(
        'YYYY-MM-DD HH:mm'
      );
      return {
        appointmentId: appointment._id,
        title: appointment.description,
        date: appointment.date,
        start: newStartTime,
        end: newEndTime,
        allDay: false,
        resource: appointment.client,
      };
    });

    return res.status(200).send(parsedAppointments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getAppointmentsForClientId;