const mongoose = require("mongoose");
const Customer = require("./customer.js");

mongoose.set("strictQuery", false);
mongoose.connect(
  "",
  (error) => {
    if (error) {
      throw error;
    }
    console.log("connected to MongoDb");
  }
);

const customer1 = new Customer({
  name: "Cristiano Ronaldo",
  city: "Riyad",
});

customer1.save((error) => {
  if (error) {
    throw error;
  }
  console.log("Customer saved.");
});

Customer.find({ name: "Lionel Messi" }, (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data);
});

Customer.findById("639221dc222d11a19e43d36a", (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data);
});

Customer.find({}, (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data);
})
  .where("city")
  .equals("Istanbul");

Customer.find({}, (error, data) => {
  if (error) {
    throw error;
  }

  console.log(data);
})
  .where("city")
  .equals("Istanbul")
  .limit(2)
  .sort("-name")
  .select("city name");

Customer.findById("639221dc222d11a19e43d36a", (error, data) => {
  if (error) {
    throw error;
  }

  console.log(data);
  data.city = "Paris";

  data.save((error) => {
    if (error) throw error;

    console.log("Customer data updated.");
  });
});

Customer.findById("63922146803594c055fe2fe3", (error, data) => {
  if (error) {
    throw error;
  }
  if (data != null) {
    console.log(data);
    data.remove((error) => {
      if (error) throw error;

      console.log("Customer data removed.");
    });
  }
});

Customer.findOneAndUpdate(
  { name: "Cristiano Ronaldo" },
  { city: "Riyad" },
  (error, data) => {
    if (error) {
      throw error;
    }
    console.log('Customer updated.');
  }
);

Customer.findByIdAndUpdate(
  "639221dc222d11a19e43d36a",
  { city: "Paris", name: "Lionel Messi" },
  (error, data) => {
    if (error) {
      throw error;
    }
    console.log('Customer updated.');
  }
);

Customer.findOneAndRemove({ name: "Cristiano Ronaldo" }, (error, data) => {
  if (error) {
    throw error;
  }
  console.log('Customer removed.');
});

Customer.findByIdAndRemove("63922b96f7fa25e3ddaa223b", (error, data) => {
  if (error) {
    throw error;
  }
  console.log('Customer removed.');
});

// .gt = greater than
// .lt = less than
// .gte = greater than or equal
// .lte = less than or equal
// .limit = top results by count according to filter
// .select = get only necessary column data
// .sort = order By
// .sort = by adding minus to start of the column name makes reverse sorting - OrderbyDesc
