const express = require("express");
const router = express.Router();

// Import controllers, validators
const { orderValidator } = require("../middleware/validators");
const { getLogin, postLogin, getLogout } = require("../controllers/authController");
const { getOrder, postOrder, getAllOrders } = require("../controllers/orderController");

// Build routes
router
    .get("/",getOrder)
    .post("/order",orderValidator,postOrder)
    .get("/orders",getAllOrders)
    .get("/login",getLogin)
    .post("/login",postLogin)
    .get("/logout",getLogout)


// Export router
module.exports = router;
