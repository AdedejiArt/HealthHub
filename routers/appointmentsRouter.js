import express from "express";
import {viewAllAppointments, deleteAppointment, acceptAppointment} from "../controllers/appointmentsController.js";  //accept an appointment
const appointmentRouter = express.Router();

//view all appts
appointmentRouter.get('/', viewAllAppointments)   //are we using auth here?

//delete appt
appointmentRouter.delete('/:id', deleteAppointment)

//accept appt
appointmentRouter.put('/:id', acceptAppointment)

export default appointmentRouter;