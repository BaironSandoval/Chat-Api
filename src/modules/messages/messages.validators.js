const { check } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const createConversationMessageValidator = [
    check("content", "Error con el contenido del mensaje")
        .exists().withMessage("La propiedad 'content' no debe estar vacía")
        .isString().withMessage("El contenido debe ser una cadena de texto")
        .notEmpty().withMessage("El contenido no debe estar vacío"),

    check("senderId", "Error con el remitente del mensaje")
        .exists().withMessage("La propiedad 'senderId' no debe estar vacía")
        .isInt().withMessage("El remitente debe ser un número entero")
        .toInt(),

    check("conversationId", "Error con el ID de la conversación")
        .exists().withMessage("La propiedad 'conversationId' no debe estar vacía")
        .isInt().withMessage("El ID de la conversación debe ser un número entero")
        .toInt(),

    validateResult,
];

module.exports = {
    createConversationMessageValidator,
};
