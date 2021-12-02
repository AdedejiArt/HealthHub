import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

//Create a DB Connection.

const Patient=sequelize.define('patients',{
Patients_Id:{
    autoincrement:true,
    type:Sequelize.INTEGER(255),
    allowNull:true,
    primaryKey:true

},
Patients_FirstName:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Patients_LastName:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Patients_EmailAddress:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Patient_Password:{
    type:Sequelize.STRING(255),
    allowNull:false,

},Patient_Location:{
    type:Sequelize.STRING(255),
    allowNull:false,

}

},{
    sequelize,
    tableName:'patients',
    timestamps:false,
    indexes:[{
        name:"PRIMARY",
        unique:true,
        fields:[
            {name:"Patients_Id"}
        ]
    }]
})

export default Patient