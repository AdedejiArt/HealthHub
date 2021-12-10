import Appointment from "../models/appointmentsModel.js";


//Capture Appointents
// export async function addPatient(req,res){
//     try{
//         let Appoint=await Appointment.create(req.body);
//         if(Appoint){
//             res.status(200).json({
//                 success:true,
//                 data:Appoint
//             })
//         }else{
//           res.status(200).json({
//               success:true,
//               message:"Appointment could not be created successfully"
//           })

//         }
//     }catch (err){
//         console.log(err);
//     res.status(500).json({
        
//         success:false,
//         message:"Opps.....Something is wrong"
//     })
//     }
// }



//view appointments
export async function viewAllAppointments (req,res){
    try{
        let allAppts = await Appointment.findAll();
        if (allAppts){
            res.status(200).json({
                success:true,
                message:"Appointment list retrieved successfully",
                data: allAppts
            })}else{
                res.json({
                    success:true,
                    message:"Appointment list could not be retrieved"
                })
            }
    }catch(err){
        if (err){
            res.json({
                success:false,
                message:"Oops! Something is wrong"
            })

        }

    }
    
}

//delete appointments
export async function deleteAppointment(req, res) {
    try {
        let specificAppt = await Appointment.destroy({where: {Appointment_id: req.params.id}});
        if (specificAppt) {
            res.json({
                success: true,
                message: "Appointment has been deleted",
                data: specificAppt
            })
        } else {
            res.json({
                success: true,
                message: "Appointment could not be deleted"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something is wrong"
        })
    }
}

//accept appointments (use update & update the status of the appt to 'accepted')
export async function acceptAppointment(req, res) {
    try {
        let acceptAppt = await Appointment.update(req.body, {where: { Appointment_id: req.params.id}})
        if (acceptAppt) {
            res.json({
                success: true,
                message: "Appointment status changed to 'accepted'",
                data: acceptAppt
            })
        } else {
            res.json({
                success: true,
                message: "Appointment status not changed - issue!"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oops! Something is wrong"
        })
    }
}
