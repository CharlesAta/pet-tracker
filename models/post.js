const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    photo: {type: String},
    // sex: {
    //     type: String,
    //     enum: ["Male", "Female", "Unknown"],
    //     },
    species: {
      type: String, 
      required: true,
      enum: ["Cat", "Dog", "Reptile", "Bird", "Rabbit", "Guinea pig", "Turtle", "Fish", "Horse", "Rat", "Others"]
    },
    // breed:{type: String},
    user: {type: Schema.Types.ObjectId, ref:'User'},
    postalCode: {type: String, required: true},
    location: {type: String, required: true},
    lat: {type: String},
    lng: {type: String},
    status:{
        type: String,
        enum: ["lost", "found"],
        },
    date: {type: Date, require: true}, 
    radius: {type: Array},
    comment:{type: Schema.Types.ObjectId, ref:'Comment'},
    phoneNumber:{type: Number},
    email:{type: String, required: true},
    circumstance: {
      type: String,
      enum: ["In my possession", "Sighting (still roaming)", "Deceased"]
    }
  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);