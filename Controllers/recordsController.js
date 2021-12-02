import Record from "../models/recordsModel.js";

//view records
export async function viewAllRecords (req,res) {
    try{
        let allRecords = await Record.findAll();
        if (allRecords){
            res.status(200).json({
                success:true,
                message: "Record list retrieved successfully",
                data: allRecords
            })}else{
                res.json({
                    success:true,
                    message:"Record list could not be retrieved"
                })
            }
    } catch(err){
        if (err){
            res.json({
                success:false,
                message:"Oops! Something is wrong"
            })

        }

    }
    
}

//upload records (is it the same as the rest?)


//delete records
export async function deleteRecord(req, res) {
    try {
        let specificRec = await Record.destroy({where: {Record_Id: req.params.id}});
        if (specificRec) {
            res.json({
                success: true,
                message: "Record has been deleted",
                data: specificRec
            })
        } else {
            res.json({
                success: true,
                message: "Record could not be deleted"
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