const express = require("express");
const { getCryptoData, getCryptoStats, getCryptoDeviation } = require("../controllers/crypto.controller");
const router = express.Router();

router.get("/", getCryptoData);
router.get("/stats", getCryptoStats);
router.get("/deviation", getCryptoDeviation);

module.exports = router;