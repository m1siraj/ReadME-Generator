import express from "express";
import PingController from "../controllers/ping.controller";
import TemplateController from "../controllers/templates.controller";

const router = express.Router();

router.get("/getTemplate", async (req, res) => {
  const controller = new TemplateController();
  const response = await controller.getTemplates();
  return res.json(response);
});

export default router;
