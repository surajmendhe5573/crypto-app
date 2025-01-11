const express = require("express");
const app = express();
const cryptoService = require("./services/crypto.services");
const cron = require("node-cron");
require('dotenv').config();

app.use(express.json());

require('./config/db');


// Initial data fetch on server start
cryptoService.fetchCryptoData();

// Schedule the background job
cron.schedule("0 */2 * * *", async () => {
    console.log("Running scheduled job to fetch cryptocurrency data...");
    await cryptoService.fetchCryptoData();
});


app.use("/api/cryptos", require('./routes/crypto'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
