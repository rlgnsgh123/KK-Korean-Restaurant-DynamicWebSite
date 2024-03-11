const { Admin } = require("../models/adminModel");

const getLogin = (req, res) => {
  if (req.session.userLoggedIn) {
      res.redirect("/orders");
    }else if(!req.session.userLoggedIn){
      res.render("pages/login");
    } 
    
};

const postLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
  
    let user = await Admin.findOne({ username: username, password: password }).exec();
  
    if (!user) {
      res.render("pages/login", { message: "Please check your username and password" });
    } else {
      req.session.username = username;
      req.session.userLoggedIn = true;
      res.redirect("/orders");
    }    
};

const getLogout = (req, res) => {
    req.session.username = "";
    req.session.userLoggedIn = false;
    res.render("pages/login", { message: "Successfully, logged out!" });
};

module.exports = {
    getLogin,
    postLogin,
    getLogout
}
