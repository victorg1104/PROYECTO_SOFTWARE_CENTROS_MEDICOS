"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cita_1 = require("../controllers/cita");
const router = (0, express_1.Router)();
router.get('/', cita_1.getCitas);
router.get('/:idCita', cita_1.getCita);
router.delete('/:idCita', cita_1.deleteCita);
router.post('/', cita_1.postCita);
router.put('/:idCita', cita_1.putCita);
exports.default = router;
