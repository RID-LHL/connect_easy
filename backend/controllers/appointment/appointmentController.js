const postAppointment = require("./postAppointment");
const updateAppointment = require("./updateAppointment");
const getAllAppointments = require("./getAllAppointments");
const deleteAppointment = require("./deleteAppointment");
const getAppointment = require("./getAppointment");
const getAppointmentByDate = require("./getAppointmentByDate");
const getAppointmentsForClientId = require("./getAppointmentsForClientId");
const updateAppointmentBookedStatus = require("./updateAppointmentBookedStatus");
const postStartMeeting = require("./postStartMeeting");
const postEndMeeting = require("./postEndMeeting");

exports.controllers = {
  postAppointment,
  updateAppointment,
  getAllAppointments,
  deleteAppointment,
  getAppointment,
  getAppointmentByDate,
  getAppointmentsForClientId,
  updateAppointmentBookedStatus,
  postStartMeeting,
  postEndMeeting,
};
