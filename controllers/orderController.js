const { validationResult } = require("express-validator");
const { Order } = require("../models/orderModel");
const{Admin} = require("../models/adminModel");

const getOrder = async (req, res)=>{
    res.render("pages/order");
};

const postOrder = (req, res) =>{
        
    let errors = validationResult(req);
    let priceEroor ="";
    
    // Declare variable for price Eroor Handleling

    const kimchi = 4.99;
    const redChicken = 10.99;
    const bulgogiGimbab = 8.49;

    let qKimchi = req.body.qKimchi;
    let qChicken = req.body.qChicken;
    let qBGimbab = req.body.qBGimbab;

    let totalPrice = qKimchi*kimchi +qChicken*redChicken + qBGimbab*bulgogiGimbab;
    
   if (totalPrice==0) {
        priceEroor = "Please choose at least one food";
   }
   
   if (!errors.isEmpty()||!priceEroor=="") {
        res.render("pages/order",{errorS:errors.array(),priceEroorS:priceEroor});
   } else {
    let name = req.body.name;
    let phone = req.body.phone;
   
    let subTotal = totalPrice;
    let tax = subTotal*0.13;
    let total = subTotal + tax;

    subTotal = subTotal.toFixed(2);
    tax = tax.toFixed(2);
    total = total.toFixed(2);

    let myOrder = new Order({
        name: name,
        phone: phone,
        qKimchi: qKimchi,
        qChicken: qChicken,
        qBGimbab: qBGimbab,
        subTotal: subTotal,
        tax: tax,
        total: total,
    });
    myOrder.save().then(()=> {console.log("Saved")})
    .catch((error)=>{console.log(error.message)});
    

    res.render("pages/receipt",{myOrder: myOrder});
   }
};

const getAllOrders = async (req, res)=>{
    if (req.session.userLoggedIn) {
    res.locals.username = req.session.username;
    let allOrder = await Order.find({});
    res.render("pages/orders",{orders: allOrder});
    }else if(!req.session.userLoggedIn){
        let loginError = "To see all of order, you shoud logged in";
        res.redirect("/login");
    }
};

module.exports = {
    getOrder,
    postOrder,
    getAllOrders
}
