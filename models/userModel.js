

import mongoose from "mongoose";

// Creating schema
const userSchema =  mongoose.Schema(
    // Adding the fielleds and their type
    {
      username: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      roleId:{ type: String, required: true },
      activate:{
        type:Array,
        default:[]
      }
   
    },
    // Adding time stramps which used save datas timings entered in DB
    {
      timestamps: true,
    }
  );

// Exporting schema
const User = mongoose.model("User", userSchema);
export default User;