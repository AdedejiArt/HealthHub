import express from "express";
import HopsitalRouter from "./HospitalRouter.js";
import PatientRouter from "./PatientsRouter.js";

const router=express.Router();



router.use("/hospital", HopsitalRouter);
router.use("/patient", PatientRouter);


export default router;