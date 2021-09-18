const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    photo: {type: String},
    sex: {
        type: String,
        enum: ["Male", "Female", "Unknown"],
        },
    species: {type: String, required: true},
    breed:{type: String},
    user: {type: Schema.Types.ObjectId, ref:'User'},
    postalCode: {type: String, required: true},
    location: {type: String, required: true},
    status:{
        type: String,
        enum: ["lost", "found"],
        },
    date: {type: Date}, 
    comment:{type: Schema.Types.ObjectId, ref:'Comment'},
    phoneNumber:{type: Number}
  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);