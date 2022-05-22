const express = require("express");
const {
  pong,
  sendIRCCCommand,
  serverStatus,
  getPowerStatus

} = require("./rest/resource");

const router = express.Router(); // eslint-disable-line new-cap
router.post("/ircc", sendIRCCCommand);
router.get("/power", getPowerStatus);
router.get("/", serverStatus);

module.exports = router;
