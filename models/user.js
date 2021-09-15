const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true, 
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 6,
    required: true
  }, 
  phoneNumber: {
      type: String,
      unique: true,
      required: true
  },
  postalCode: {
      type: String,
      required: true
  },
  pet: {type: Schema.Types.ObjectId, ref: 'Pet'}
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

module.exports = mongoose.model('User', userSchema);