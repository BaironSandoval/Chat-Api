const { check } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const registerUserValidator = [
  check("firstname", "Error con firstname")
    .exists()
    .withMessage("No esta incluida la propiedad firstname")
    .notEmpty()
    .withMessage("El firstname no debe estar vacio")
    .isString()
    .withMessage("El valor del firstname debe ser string")
    .isLength({ min: 2, max: 50 })
    .withMessage("la longitud del nombre debe de ser entre 2 y 50 caracteres")
    .matches(/^[a-zA-Z\s]/)
    .withMessage("el firstname solo acepta letras"),
  check("lastname", "Error con lastname")
    .exists()
    .withMessage("No esta incluida la propiedad lastname")
    .notEmpty()
    .withMessage("El lastname no debe estar vacio")
    .isString()
    .withMessage("El valor del lastname debe ser string")
    .isLength({ min: 2, max: 50 })
    .withMessage("la longitud del apellido debe de ser entre 2 y 50 caracteres")
    .matches(/^[a-zA-Z\s]/)
    .withMessage("el lastname solo acepta letras"),
  check("email", "Error en la propiedad email")
    .exists()
    .withMessage("la propiedad email no esta incluida")
    .notEmpty()
    .withMessage("la propiedad email no debe estar vacia")
    .isString()
    .withMessage("la propiedad email debe ser string")
    .isEmail()
    .withMessage("la propiedad email no tiene un formato de email")
    .isLength({ min: 7, max: 50 })
    .withMessage("el email debe tener minimo 7 y maximo 50 caracteres"),
  check("password", "Error en la propiedad password")
    .exists()
    .withMessage("la propiedad password no esta incluida")
    .notEmpty()
    .withMessage("la propiedad password no debe estar vacia")
    .isString()
    .withMessage("la propiedad password debe ser string")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%-^&*]{8,}$/
    )
    .withMessage(
      "el password debe ser minimo de 8 caracteres, una mayuscula, una minuscula y un caracter especial"
    ),
  validateResult,
];

const loginValidator = [
  check("email", "Error en la propiedad email")
    .exists()
    .withMessage("la propiedad email no esta incluida")
    .notEmpty()
    .withMessage("la propiedad email no debe estar vacia")
    .isString()
    .withMessage("la propiedad email debe ser string")
    .isEmail()
    .withMessage("la propiedad email no tiene un formato de email"),
  check("password", "Error en la propiedad password")
    .exists()
    .withMessage("la propiedad password no esta incluida")
    .notEmpty()
    .withMessage("la propiedad password no debe estar vacia")
    .isString()
    .withMessage("la propiedad password debe ser string"),
  validateResult,
];

module.exports = {
  registerUserValidator,
  loginValidator,
};
