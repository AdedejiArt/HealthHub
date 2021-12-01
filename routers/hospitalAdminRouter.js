import express from "express";
import {signUp, logIn, viewAllAppointments, viewAppointment, deleteAppointment, acceptAppointment} from "../controllers/hospitalAdminController.js";
import { authenticate } from "../middlewares/auth.js";
const adminRouter = express.Router();

//signup
adminRouter.post('/', authenticate, signUp)

//login
adminRouter.post('/login', logIn)

//view all appts
adminRouter.get('/', viewAllAppointments)   //are we using auth here?

//view specific appt
adminRouter.get('/:id', viewAppointment)   //and here?

//delete appt
adminRouter.delete('/:id', deleteAppointment)

//accept appt
adminRouter.put('/:id', acceptAppointment)  //update so status goes from pending -> accepted

export default adminRouter;
