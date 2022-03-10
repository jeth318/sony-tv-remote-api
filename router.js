const express = require("express");
const {
  pong,
  sendIRCCCommand,
  serverStatus,
  getPowerStatus
  
} = require("./rest/resource");

const router = express.Router(); // eslint-disable-line new-cap
router.post("/tv/ircc", sendIRCCCommand);
router.get("/tv/power", getPowerStatus);
router.get("/tv", serverStatus);

module.exports = router;
