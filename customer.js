const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: String,
  city: String,
  created: Date
});

customerSchema.pre('save', function(next) {
    let currentDate = new Date();
    this.created = currentDate;

    next();
});

const Customer = mongoose.model("Customer", customerSchema);


module.exports = Customer;