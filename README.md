# 🧠 Web3 Backend Project

Ett fullstack Web3-projekt som kopplar samman ett **smart kontrakt (Solidity/Hardhat)** med ett **Node.js REST API (Express)** och databaskoppling med **MongoDB** eller **PostgreSQL**.

---

## 📁 Projektstruktur

---

## ⚙️ Teknikstack

- **Solidity** + **Hardhat** (smart contracts)
- **Ethers.js** (interaktion med blockchain)
- **Node.js + Express** (REST API)
- **MongoDB / PostgreSQL** (databas)
- **dotenv** för säker miljöhantering

---

## 🚀 Installation

1. **Klona repot**

   ```bash
   git clone <repo-url>
   cd web3-backend-project

   ```

2. Installera dependencies
   npm install
   cd backend && npm install

3. Kompilera smart contracts
   npx hardhat compile

4. Starta Hardhat node(lokalt testnätverk)
   npx hardhat node

5. Deploya kontrakt
   npx hardhat run scripts/deploy.js --network localhost

Testa smarta kontrakt
npx hardhat test
