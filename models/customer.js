const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  username: { type:String, required:true}, 
  password: { type:String, required:true }, 
  email: { type:String, required:true, unique:true }, 
  location: { type:String, required:true},
  userType: String,
  imgUrl: { type: String, default: 'https://i.pinimg.com/originals/14/ca/1d/14ca1d18880796ce81bde18268e32b8e.jpg'},
  balance: { type:Number, min: 0},
  pinnedbusiness: [{
    businessID : [{type: Schema.Types.ObjectId, ref: 'Customer'}],
    points: { type:Number,  min: 0 }
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

/* --------------------------backlog
status - String
totalPoints - Number
--------------------------backlog */

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

