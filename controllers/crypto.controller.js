const Crypto = require("../models/cryptoModel");

const getCryptoData = async (req, res) => {
    try {
        const cryptoData = await Crypto.find();
        res.status(200).json({message: 'Crypto data fetched successfully', data:cryptoData});
    } catch (err) {
        res.status(500).json({message: 'Internal server error'});
    }
};


module.exports = { getCryptoData };
