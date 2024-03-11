const mongoose = require("mongoose");

const uri = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(uri)
.then(()=> {console.log("Conneted!")})
.catch((error =>{console.log(error.message)}));

// Create an Admin Schema
const Schema = mongoose.Schema;

const adminSchema = Schema({
    username: {type: String, unique: true},
    password:{type: String}
});


// Create an username, password - admin, admin


// Create an Admin Model - Collection name is "admins"
const Admin = mongoose.model("admins",adminSchema);


// Export the model
module.exports = {
    Admin
}
