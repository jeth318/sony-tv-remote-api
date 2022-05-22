import axios from "axios";
import { getIsTurnedOnConfig, getIrccConfig } from "./config.js";
import { xmlStringGenerator } from "../utils/ircc-util.js";

export const serverStatus = (req, res) => res.send("UP");

export const getPowerStatus = async (req, res) => {
  try {
    const data = await isTurnedOn();
    return res.json({ success: true, active: data.active });
  } catch (error) {
    return res.json({ success: false, data: null });
  }
};

export const sendIRCCCommand = async (req, res) => {
  const { code } = req.body;
  const data = xmlStringGenerator(code);
  try {
    await axios(getIrccConfig(data));
    return res.json({ success: true });
  } catch (error) {
    console.error("Oops, there was an error:", error);
    return res.json({ success: false, errorEnum: "NETWORK_ERROR" });
  }
};

export const isTurnedOn = async (req, res) => {
  try {
    const response = await axios(getIsTurnedOnConfig());
    return { active: response.data.result[0].status === "active" };
  } catch (error) {
    console.error("Oops, cannot fetch system information:", error);
    return { errorEnum: "NETWORK_ERROR" };
  }
};

