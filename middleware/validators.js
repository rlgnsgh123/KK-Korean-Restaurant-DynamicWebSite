const { check, body } = require("express-validator");

// Create a Validator for Order
const orderValidator = [
    check("name").notEmpty().withMessage("Please Enter a name").matches(/^([a-zA-Z]+[\s]+[a-zA-Z]+)*$/).withMessage("Pleaase Enter name as a right format (firstName lastName)"),
    check("phone").not().isEmpty().withMessage("Please Enter a phone number").matches(/^(\d{10})*$/).withMessage("Pleaase Enter right format 555-555-5555"),
    check("qKimchi", "Please Enter number in Kimchi").optional({ checkFalsy: true }).isNumeric(),
    check("qChicken", "Please Enter number in Red Chicken").optional({ checkFalsy: true }).isNumeric(),
    check("qBGimbab", "Please Enter number in Bulgogi Gimbab").optional({ checkFalsy: true }).isNumeric()
];
// Export the validator
module.exports = {
    orderValidator
}
