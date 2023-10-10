const { check } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const createConversationValidator = [
    check("title", "Error con el título de la conversación")
        .optional()
        .isString().withMessage("El título debe ser una cadena de texto")
        .isLength({ max: 30 }).withMessage("El título no debe superar los 30 caracteres"),

    validateResult,
];

const createGroupConversationValidator = [
    ...createConversationValidator,

    check("participants", "Error con los participantes del grupo")
        .exists().withMessage("La propiedad 'participants' no debe estar vacía")
        .isArray().withMessage("La propiedad 'participants' debe ser un array")
        .custom((participants) => {
            if (!participants || participants.length < 2) {
                throw new Error("Debe haber al menos dos participantes en el grupo");
            }
            return true;
        }),

    validateResult,
];

module.exports = {
    createConversationValidator,
    createGroupConversationValidator,
};
