const { Router } = require("express");
const {
  createConversation,
  createGroupConversation,
  getAllConversations,
} = require("./conversations.controllers");
const authenticate = require("../../middlewares/auth.middleware");
const { createConversationValidator, createGroupConversationValidator } = require("./conversations.validators")
const router = Router();

router.post("/", authenticate, createConversationValidator, createConversation);
router.post("/group", authenticate, createGroupConversationValidator, createGroupConversation);

router.get("/:id", authenticate, getAllConversations);

module.exports = router;
