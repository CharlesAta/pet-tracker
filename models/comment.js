const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {type: Schema.Types.ObjectId, ref:'User'},
    content: {type: String, required: true},
  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);