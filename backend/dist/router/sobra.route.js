"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sobrasRoutes = void 0;
const express_1 = require("express");
const sobras_controllers_1 = require("../controllers/sobras.controllers");
const isValidBody_middleware_1 = require("../middleware/isValidBody.middleware");
const sobras_schemas_1 = require("../schemas/sobras.schemas");
const verifyToken_middleware_1 = require("../middleware/verifyToken.middleware");
exports.sobrasRoutes = (0, express_1.Router)();
const sobrasControllers = new sobras_controllers_1.SobrasController();
exports.sobrasRoutes.post("/", verifyToken_middleware_1.verifyToken.execute, isValidBody_middleware_1.IsValidBody.execute({ body: sobras_schemas_1.createSobrasSchema }), sobrasControllers.createSobras);
exports.sobrasRoutes.get("/", verifyToken_middleware_1.verifyToken.execute, sobrasControllers.getAllSobras);
