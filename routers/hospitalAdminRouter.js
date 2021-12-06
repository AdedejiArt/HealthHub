import express from "express";
import { viewAllAppointments, viewAppointment, deleteAppointment, acceptAppointment} from "../controllers/hospitalAdminController.js";
import { authenticate } from "../middlewares/auth.js";
//import { authenticate } from "../middlewares/auth.js";
const adminRouter = express.Router();

//signup
//adminRouter.post('/', authenticate, signUp)

//login
//adminRouter.post('/login', logIn)

//view all appts
adminRouter.get('/',authenticate, viewAllAppointments)   //are we using auth here?

//view specific appt
adminRouter.get('/:id', authenticate,viewAppointment)   //and here?

//delete appt
adminRouter.delete('/:id',authenticate, deleteAppointment)

//accept appt
adminRouter.put('/:id',authenticate, acceptAppointment)  //update so status goes from pending -> accepted

export default adminRouter;
