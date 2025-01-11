const Crypto = require("../models/cryptoModel");

const getCryptoData = async (req, res) => {
    try {
        const cryptoData = await Crypto.find();
        res.status(200).json({message: 'Crypto data fetched successfully', data:cryptoData});
    } catch (err) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const getCryptoStats = async (req, res) => {
    const { coin } = req.query;

    try {
        const latestData = await Crypto.findOne({ coinId: coin });

        if (!latestData) {
            return res.status(404).json({message: "Coin data not found" });
        }

        res.status(200).json({
            price: latestData.currentPrice,
            marketCap: latestData.marketCap,
            "24hChange": latestData.change24h,
        });
    } catch (err) {
       res.status(500).json({message: 'Internal server error'});
    }
};

// Get standard deviation of prices for the last 100 records
const getCryptoDeviation = async (req, res) => {
    const { coin } = req.query;

    try {
        const records = await Crypto.find({ coinId: coin }).sort({ createdAt: -1 }).limit(100);

        if (records.length === 0) {
            return res.status(404).json({ success: false, message: "No records found" });
        }

        const prices = records.map((record) => record.currentPrice);
        const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
        const variance = prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / prices.length;
        const deviation = Math.sqrt(variance);

        res.status(200).json({ deviation: deviation.toFixed(2) });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};


module.exports = { getCryptoData, getCryptoStats, getCryptoDeviation };