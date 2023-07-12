import * as dbCtrl from "~~/server/controller/db";
import { createRouter, defineEventHandler, useBase } from "h3";

const router = createRouter();

router.get("/portfolio", defineEventHandler(dbCtrl.readPortfolio));
router.get("/projects", defineEventHandler(dbCtrl.readProjects));
router.get("/services", defineEventHandler(dbCtrl.readServices));

export default useBase("/api", router.handler);
