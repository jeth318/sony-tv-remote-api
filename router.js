import { Router } from "express";
import { sendIRCCCommand, serverStatus, getPowerStatus } from "./rest/resource.js";

const router = Router(); // eslint-disable-line new-cap
router.get("/", serverStatus);
router.get("/power", getPowerStatus);
router.post("/ircc", sendIRCCCommand);

export default router;
