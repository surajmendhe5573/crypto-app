# Crypto App

A Node.js application that fetches cryptocurrency data from the CoinGecko API, stores it in a MongoDB database, and provides APIs for cryptocurrency statistics and standard deviation calculations.

## Features

1. **Background Job**  
   - Fetches data for three cryptocurrencies (`Bitcoin`, `Matic`, and `Ethereum`) every 2 hours.
   - Fetches the following data for each cryptocurrency:
     - **Price (USD)**
     - **Market Cap (USD)**
     - **24-hour Change**

2. **API Endpoints**  
   - `/api/cryptos`: Fetches all stored cryptocurrency data from the database.
   - `/api/cryptos/stats`: Fetches the latest statistics (price, market cap, 24h change) for a requested cryptocurrency.
   - `/api/cryptos/deviation`: Calculates and returns the standard deviation of prices for the last 100 records of a requested cryptocurrency.

3. **Data Storage**  
   - Stores cryptocurrency data in MongoDB for easy retrieval and analysis.

4. **Standard Deviation Calculation**  
   - Calculates the standard deviation of prices for the last 100 records for a specific cryptocurrency.

5. **Cron Job**  
   - Runs a background job every 2 hours to fetch and store the latest data from CoinGecko.

## Tech Stack

- **Backend**: 
  - **Node.js**: JavaScript runtime for building the backend API.
  - **Express.js**: Web framework for building REST APIs and handling requests.
  
- **Database**:
  - **MongoDB**: NoSQL database for storing cryptocurrency data.
  - **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

- **API Communication**:
  - **Axios**: HTTP client for making API requests to CoinGecko.

- **Task Scheduling**:
  - **node-cron**: Library for scheduling the background job to fetch cryptocurrency data every 2 hours.

- **Utilities**:
  - **dotenv**: Loads environment variables from `.env` file for easy configuration.


## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB 


## Installation and Setup
- Clone the repository
```
git clone git clone https://github.com/surajmendhe5573/crypto-app.git

```
- Install dependencies
```
cd <crypto-app>
npm install
```
- Build and run the project
```
npm start
```

## Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```
# Port
PORT=5000

# Database Connection
MONGODB_URI=mongodb://localhost:27017/defaultdb

```

## 🚀 About Me
I'm a Backend developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/surajmendhe5573)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-mendhe-569879233/?original_referer=https%3A%2F%2Fsearch%2Eyahoo%2Ecom%2F&originalSubdomain=in)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
