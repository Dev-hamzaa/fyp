import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
  {
    name: { type: String },
    fcmApp: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    emergencyNumber: { type: String },
    profilePic: { type: String },
    bloodType: { type: String },
    specialization: { type: String },
    phoneNumber: { type: String },
    userRole: {
      type: String,
      enum: ["admin", "patient", "donor", "doctor"],
      default: "student",
    },
    email: {
      type: String,
      required: [true, "Please provide email address"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,

      minlength: 6,
      select: false,
    },
   
    availablibility:[
      {
        day:String,
        startDate:mongoose.Schema.Types.Date,
        endDate:mongoose.Schema.Types.Date,
      }
    ]
  },
  {
    timestamps: true,
  }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
