const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    photo: {type: String},
    species: {type: String, required: true},
    breed:{type: String},
    location: {type: String}, 
    status:{type: Boolean},
    lastSeen: {type: Date, required: true}
  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Pet", petSchema);