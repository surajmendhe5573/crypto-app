const axios = require("axios");
const Crypto = require("../models/cryptoModel");

// Fetch data from CoinGecko API
const fetchCryptoData = async () => {
    try {
        const coins = ["bitcoin", "matic-network", "ethereum"];
        const url = `https://api.coingecko.com/api/v3/simple/price`;
        const response = await axios.get(url, {
            params: {
                ids: coins.join(","),
                vs_currencies: "usd",
                include_market_cap: true,
                include_24hr_change: true,
            },
        });

        const data = response.data;

        for (const coinId of coins) {
            const coinData = {
                coinId,
                name: coinId.replace("-", " ").toUpperCase(),
                currentPrice: data[coinId].usd,
                marketCap: data[coinId].usd_market_cap,
                change24h: data[coinId].usd_24h_change,
            };

            // Upsert data into MongoDB
            await Crypto.findOneAndUpdate({ coinId }, coinData, { upsert: true, new: true });
        }

        console.log("Cryptocurrency data updated successfully.");
    } catch (err) {
        console.error("Error fetching cryptocurrency data:", err.message);
    }
};

module.exports = { fetchCryptoData };
