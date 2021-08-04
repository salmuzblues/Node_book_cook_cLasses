const mongoose = require('mongoose');
const URI = "mongodb://localhost:27017/customers";
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
//Customer Model 
const Customer = mongoose.model("Customer", {
  forename: String,
  surname: String
});

const customer1 = new Customer({
  forename: "Beth",
  surname: "Griggs",
});

customer1.save().then((doc) => {
  console.log('Added new customer: ', doc.forename, doc.surname);
  listCustomers();
});

function listCustomers() {
  Customer.find().then((doc) => {
    doc.forEach((customer) => {
      console.log(`-${customer.surname}, ${customer.forename}`);
      mongoose.connection.close();
    })
  })
}